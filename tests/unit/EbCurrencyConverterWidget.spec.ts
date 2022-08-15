import { flushPromises, shallowMount } from "@vue/test-utils";
import EbCurrencyConverterWidget from "@/components/EbCurrencyConverterWidget/EbCurrencyConverterWidget.vue";
import { CurrencyConverterDataSource } from "@/components/EbCurrencyConverterWidget/types";

const dataSource = {
  getCurrencies: async () =>
    Promise.resolve([
      {
        id: "EUR",
        label: "Euro",
      },
      {
        id: "GBP",
        label: "British Pound Sterling",
      },
      {
        id: "GEL",
        label: "Georgian Lari",
      },
    ]),
  convert: async () => ({ error: null }),
  getLatest: async () => ({ error: null }),
} as CurrencyConverterDataSource;

const props = {
  dataSource,
  currencyFrom: "EUR",
  currencyTo: "GBP",
  amount: 23.43,
};

describe("EbCurrencyConverterWidget.vue", () => {
  it("renders right status when props passed", async () => {
    expect.assertions(4);
    const wrapper = shallowMount(EbCurrencyConverterWidget, {
      props,
    });

    const selectElements = wrapper.findAll("select");
    const amountElement = wrapper.find("input");

    await flushPromises();

    expect(selectElements[0]?.element.value).toEqual("EUR");
    expect(selectElements[1]?.element.value).toEqual("GBP");
    expect(amountElement.element.value).toEqual("23.43");
    expect(wrapper.find(".rate")?.text()).toEqual("Exchange rate:");
  });

  it("renders right status when props are not passed", async () => {
    expect.assertions(4);
    const wrapper = shallowMount(EbCurrencyConverterWidget, {
      props: {
        dataSource: props.dataSource,
      },
    });

    const selectElements = wrapper.findAll("select");
    const amountElement = wrapper.find("input");

    await flushPromises();

    expect(selectElements[0]?.element.value).toEqual("");
    expect(selectElements[1]?.element.value).toEqual("");
    expect(amountElement.element.value).toEqual("1");
    expect(wrapper.find(".rate")?.text()).toEqual("Exchange rate:");
  });
});
