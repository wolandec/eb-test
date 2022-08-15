import { Convert, GetCurrencies, GetLatest } from "@/api/types";

export interface CurrencyConverterDataSource {
  getCurrencies: GetCurrencies;
  convert: Convert;
  getLatest: GetLatest;
}
