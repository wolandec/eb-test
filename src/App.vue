<template>
  <suspense>
    <div :class="$style.root">
      Initial currencies are set in the global state
      <EbCurrencyConverterWidget
        :dataSource="dataSource"
        :currencyFrom="userCurrency"
        :currencyTo="toCurrency"
      />
    </div>
    <template #fallback> Loading... </template>
  </suspense>
</template>

<script lang="ts" setup>
import EbCurrencyConverterWidget from "@/components/EbCurrencyConverterWidget/EbCurrencyConverterWidget.vue";
import { toCurrency, userCurrency } from "@/types/state";
import { convert, getCurrencies, getLatest } from "@/api/ExchangeRate";

const dataSource = {
  getCurrencies: getCurrencies,
  convert: convert,
  getLatest: getLatest,
};
</script>

<style module>
.root {
  @apply flex flex-col justify-center items-center gap-6 p-3;
}
</style>
