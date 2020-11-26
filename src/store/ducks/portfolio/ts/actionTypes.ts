import { Action } from "redux";
import {
  accountData,
  Currency,
  PortfolioLoadingState,
  Position,
} from "./state";

export enum PortfolioActionsType {
  SET_PORTFOLIO = "PORTFOLIO/SET_PORTFOLIO",
  FETCH_PORTFOLIO = "PORTFOLIO/FETCH_PORTFOLIO",
  SET_LOADING_STATE = "PORTFOLIO/SET_LOADING_STATE",
  SET_TOKEN = "PORTFOLIO/SET_TOKEN",
  SET_ACCOUNTS = "PORTFOLIO/SET_ACCOUNTS",
  SET_CURRENCY = "PORTFOLIO/SET_CURRENCY",
  CHANGE_IS_SANDBOX = "PORTFOLIO/CHANGE_IS_SANDBOX",
}
export interface ChangeIsSandboxActionInterface
  extends Action<PortfolioActionsType> {
  type: PortfolioActionsType.CHANGE_IS_SANDBOX;
  payload: boolean;
}
export interface SetLoadingStateActionInterface
  extends Action<PortfolioActionsType> {
  type: PortfolioActionsType.SET_LOADING_STATE;
  payload: PortfolioLoadingState;
}
export interface SetTokenActionInterface extends Action<PortfolioActionsType> {
  type: PortfolioActionsType.SET_TOKEN;
  payload: string;
}
export interface SetAccountsActionInterface
  extends Action<PortfolioActionsType> {
  type: PortfolioActionsType.SET_ACCOUNTS;
  payload: accountData[];
}
export interface SetPortfolioActionInterface
  extends Action<PortfolioActionsType> {
  type: PortfolioActionsType.SET_PORTFOLIO;
  payload: Position[];
}
export interface SetCurrencyActionInterface
  extends Action<PortfolioActionsType> {
  type: PortfolioActionsType.SET_CURRENCY;
  payload: Currency[];
}
export interface FetchPortfolioActionInterface
  extends Action<PortfolioActionsType> {
  type: PortfolioActionsType.FETCH_PORTFOLIO;
  payload: string;
}
