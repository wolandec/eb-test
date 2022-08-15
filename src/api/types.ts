export type GetCurrencies = () => Promise<CurrenciesResult>;
export type GetLatest = () => Promise<GetLatestResult>;

export type Convert = (
  from: string,
  to: string,
  value: number
) => Promise<ConvertResult>;

export interface ErrorType {
  error: string | null;
}

export interface ConvertResult extends ErrorType {
  conversionRate?: string;
  result?: string;
}

export interface GetLatestResult {
  error: string | null;
  timeLastUpdateUnix?: number;
  timeNextUpdateUnix?: number;
}

export type CurrenciesResult = { id: string; label: string }[];
