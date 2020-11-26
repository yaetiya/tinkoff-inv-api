import { StringLiteral } from "typescript";

export enum PortfolioLoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface PortfolioState {
  items: Position[];
  currencies: Currency[];
  loadingState: PortfolioLoadingState;
  token: string | undefined;
  accounts: accountData[];
  isSandBox: boolean;
}
export interface accountData {
  brokerAccountType: string;
  brokerAccountId: string;
}
export interface Position {
  figi: string;
  ticker: string;
  isin: string;
  instrumentType: string;
  balance: number;
  blocked: number;
  expectedYield: {
    currency: string;
    value: number;
  };
  lots: number;
  averagePositionPrice: {
    currency: string;
    value: number;
  };
  averagePositionPriceNoNkd: {
    currency: string;
    value: number;
  };
  name: string;
}
export interface Currency {
  currency: string;
  balance: number;
}
