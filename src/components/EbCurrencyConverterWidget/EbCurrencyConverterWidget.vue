<template>
  <section :class="$style.root">
    <div :class="$style.form">
      <h3 :class="$style.header">Currency converter</h3>
      <select v-model="widgetCurrencyFrom" :class="$style.input">
        <option
          v-for="currency in currencies"
          :value="currency.id"
          :key="currency.id"
          :title="currency.label"
          v-text="`${currency.id} (${currency.label})`"
        />
      </select>
      <select v-model="widgetCurrencyTo" :class="$style.input">
        <option
          v-for="currency in currencies"
          :value="currency.id"
          :key="currency.id"
          :title="currency.label"
          v-text="`${currency.id} (${currency.label})`"
        />
      </select>
      <input
        ref="amountRef"
        type="number"
        :value="widgetAmount"
        placeholder="0.00"
        min="0"
        step="0.01"
        :class="$style.input"
        @input="handleAmountInput"
      />
      <p :class="$style.result" v-text="`You get ${converted || ''}`" />
      <p :class="$style.error" v-if="error" v-text="error" />
    </div>
    <p :class="$style.rate">
      Exchange rate:<span class="font-bold pl-2" v-text="conversionRate" />
    </p>
  </section>
</template>

<script lang="ts">
export default {
  name: "EbCurrencyConverterWidget",
};
</script>

<script setup lang="ts">
import {
  defineProps,
  onBeforeUnmount,
  PropType,
  ref,
  toRefs,
  watch,
} from "vue";
import { CurrencyConverterDataSource } from "@/components/EbCurrencyConverterWidget/types";
import { debounce } from "lodash";
import { CurrenciesResult } from "@/api/types";
import { defineExpose } from "vue";

const props = defineProps({
  dataSource: {
    type: Object as PropType<CurrencyConverterDataSource>,
    required: true,
  },
  currencyFrom: {
    type: String,
  },
  currencyTo: {
    type: String,
  },
  amount: {
    type: Number,
    default: 1,
  },
});

const { amount, currencyFrom, currencyTo, dataSource } = toRefs(props);

const converted = ref<number | null>(null);
const widgetCurrencyFrom = ref<string>(currencyFrom?.value || "");
const widgetCurrencyTo = ref(currencyTo?.value || "");
const widgetAmount = ref(amount.value);
const conversionRate = ref("");
const error = ref("");
const nextUpdate = ref(0);
const currencies = ref<CurrenciesResult>([]);
const checkLatestId = ref(0);
const amountRef = ref();

const debouncedConvert = debounce(convert, 500);

async function convert() {
  error.value = "";
  if (!widgetAmount.value) {
    converted.value = 0;
    return;
  }

  const convertResult = await dataSource.value.convert(
    widgetCurrencyFrom.value,
    widgetCurrencyTo.value,
    widgetAmount.value
  );

  if (convertResult.error) error.value = convertResult.error;

  converted.value = Number(convertResult.result) || 0;
  conversionRate.value = convertResult.conversionRate ?? "-";
}

async function updateLatest() {
  const latest = await dataSource.value.getLatest();

  nextUpdate.value = latest.timeNextUpdateUnix || 0;
}

watch([currencyFrom], () => {
  console.log(currencyFrom?.value);
  widgetCurrencyFrom.value = currencyFrom?.value || "";
});
watch([currencyTo], () => {
  widgetCurrencyTo.value = currencyTo?.value || "";
});
watch([amount], () => {
  widgetAmount.value = amount?.value || 0;
});
watch(
  [widgetAmount, widgetCurrencyFrom, widgetCurrencyTo],
  ([amountValue], [oldAmountValue]) => {
    if (amountValue === oldAmountValue) convert();
    else debouncedConvert();
  },
  { immediate: true }
);

onBeforeUnmount(() => clearInterval(checkLatestId.value));

function handleAmountInput(event: InputEvent) {
  const value = event.target.value;

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, decimal] = String(value).match(/\d[,.](\d+)$/) || [];

  if (decimal?.length > 2) {
    amountRef.value.value = widgetAmount.value;
    return;
  }

  widgetAmount.value = value;
}

async function init() {
  currencies.value = await dataSource.value.getCurrencies();
  await updateLatest();

  checkLatestId.value = setInterval(() => {
    if (new Date().getMilliseconds() >= nextUpdate.value) {
      updateLatest();
      convert();
    }
  }, 2000);
}

init();

defineExpose({ currencies });
</script>

<style module>
.root {
  @apply border-2 rounded-2xl;
  @apply shadow shadow-gray-200 shadow-lg;
}

.header {
  @apply col-span-2 text-2xl text-gray-500;
}

.input {
  @apply py-3 px-4 border rounded;
}

.result {
  @apply flex items-center text-2xl text-blue-400;
}

.rate {
  @apply flex col-span-2 align-middle bg-amber-300 items-center p-3 rounded-b-2xl text-gray-700;
}

.form {
  @apply grid grid-cols-2 gap-6;
  @apply p-5;
}

.error {
  @apply col-span-2 text-red-500;
}
</style>
