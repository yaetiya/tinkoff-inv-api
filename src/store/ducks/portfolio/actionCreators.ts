import {
  ChangeIsSandboxActionInterface,
  FetchPortfolioActionInterface,
  PortfolioActionsType,
  SetAccountsActionInterface,
  SetCurrencyActionInterface,
  SetLoadingStateActionInterface,
  SetPortfolioActionInterface,
  SetTokenActionInterface,
} from "./ts/actionTypes";
import {
  Position,
  PortfolioLoadingState,
  accountData,
  Currency,
} from "./ts/state";

export const setPortfolioPositions = (
  payload: Position[]
): SetPortfolioActionInterface => ({
  type: PortfolioActionsType.SET_PORTFOLIO,
  payload,
});
export const setLoadingState = (
  payload: PortfolioLoadingState
): SetLoadingStateActionInterface => ({
  type: PortfolioActionsType.SET_LOADING_STATE,
  payload,
});
export const fetchPositions = (
  payload: string
): FetchPortfolioActionInterface => ({
  type: PortfolioActionsType.FETCH_PORTFOLIO,
  payload,
});
export const setToken = (payload: string): SetTokenActionInterface => ({
  type: PortfolioActionsType.SET_TOKEN,
  payload,
});
export const setAccounts = (
  payload: accountData[]
): SetAccountsActionInterface => ({
  type: PortfolioActionsType.SET_ACCOUNTS,
  payload,
});
export const setCurrency = (
  payload: Currency[]
): SetCurrencyActionInterface => ({
  type: PortfolioActionsType.SET_CURRENCY,
  payload,
});
export const setIsSandbox = (
  payload: boolean
): ChangeIsSandboxActionInterface => ({
  type: PortfolioActionsType.CHANGE_IS_SANDBOX,
  payload,
});
export type PortfolioActions =
  | ChangeIsSandboxActionInterface
  | SetPortfolioActionInterface
  | SetTokenActionInterface
  | SetAccountsActionInterface
  | SetCurrencyActionInterface
  | SetLoadingStateActionInterface
  | FetchPortfolioActionInterface;
