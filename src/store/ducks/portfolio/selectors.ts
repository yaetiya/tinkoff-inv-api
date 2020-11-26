import { RootState } from "../../store";
import {
  accountData,
  Currency,
  PortfolioLoadingState,
  PortfolioState,
  Position,
} from "./ts/state";

export const selectPortfolioState = (state: RootState): PortfolioState =>
  state.portfolio;
export const selectPositions = (state: RootState): Position[] =>
  selectPortfolioState(state).items;
export const selectCurrency = (state: RootState): Currency[] =>
  selectPortfolioState(state).currencies;
export const selectLoadingState = (state: RootState): PortfolioLoadingState =>
  selectPortfolioState(state).loadingState;
export const selectIsSandbox = (state: RootState): boolean =>
  selectPortfolioState(state).isSandBox;

export const selectIsPosrtfolioLoading = (state: RootState): boolean =>
  selectLoadingState(state) === PortfolioLoadingState.LOADING;

export const selectIsPosrtfolioLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === PortfolioLoadingState.LOADED;

export const selectIsPosrtfolioError = (state: RootState): boolean =>
  selectLoadingState(state) === PortfolioLoadingState.ERROR;
export const selectIsPosrtfolioNever = (state: RootState): boolean =>
  selectLoadingState(state) === PortfolioLoadingState.NEVER;
export const selectAccounts = (state: RootState): accountData[] =>
  selectPortfolioState(state).accounts;

export const selectToken = (state: RootState): string | undefined =>
  selectPortfolioState(state).token;
