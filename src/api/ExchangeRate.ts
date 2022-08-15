import {
  Convert,
  ErrorType,
  GetCurrencies,
  GetLatest,
  GetLatestResult,
} from "@/api/types";
import En_en from "@/locales/En_en";
import { currencies } from "@/types/state";

const BASE_URL = " https://v6.exchangerate-api.com/v6/";
const APP_ID = "935633f93176662727d9b583";

export interface ApiConvertResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  target_code: string;
  conversion_rate: string;
  conversion_result: string;
}

export interface GetLatestResponse {
  result: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
}

export interface ErrorResponse {
  result: string;
  error_type: string;
}

export const getCurrencies: GetCurrencies = async () => {
  // Normally currencies are pulled using api, emulate that behaviour here
  return Promise.resolve(currencies);
};

export const convert: Convert = async (
  from: string,
  to: string,
  amount: number
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${APP_ID}/pair/${from}/${to}/${amount}`
    );

    if (response.status === 404)
      return proceedError("One of currencies not found");

    const result = (await response.json()) as
      | ApiConvertResponse
      | ErrorResponse;

    if (result.result === "error")
      return {
        error:
          En_en[(result as ErrorResponse).error_type as keyof typeof En_en],
      };

    return {
      error: null,
      conversionRate: (result as ApiConvertResponse).conversion_rate,
      result: (result as ApiConvertResponse).conversion_result,
    };
  } catch (e) {
    return proceedError();
  }
};

export const getLatest: GetLatest = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${APP_ID}/latest/USD`);

    const result = (await response.json()) as GetLatestResponse | ErrorResponse;

    if (result.result === "error")
      return {
        error:
          En_en[(result as ErrorResponse).error_type as keyof typeof En_en],
      };

    return {
      error: null,
      timeLastUpdateUnix: (result as GetLatestResponse).time_last_update_unix,
      timeNextUpdateUnix: (result as GetLatestResponse).time_next_update_unix,
    } as GetLatestResult;
  } catch (e) {
    return proceedError();
  }
};

function proceedError(errorText = ""): ErrorType {
  // Here we could send message to the Sentry or something to track such exceptions
  return {
    error: errorText || En_en["some-error"],
  };
}
