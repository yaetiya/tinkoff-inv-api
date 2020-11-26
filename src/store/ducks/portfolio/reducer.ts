import produce, { Draft } from "immer";
import { PortfolioActions } from "./actionCreators";
import { PortfolioActionsType } from "./ts/actionTypes";
import { PortfolioState, PortfolioLoadingState } from "./ts/state";

const initialNewsState: PortfolioState = {
  items: [],
  loadingState: PortfolioLoadingState.NEVER,
  token: undefined,
  accounts: [],
  isSandBox: true,
  currencies: [],
};

export const portfolioReducer = produce(
  (draft: Draft<PortfolioState>, action: PortfolioActions) => {
    switch (action.type) {
      case PortfolioActionsType.SET_PORTFOLIO:
        draft.items = action.payload;
        draft.loadingState = PortfolioLoadingState.LOADED;
        break;
      case PortfolioActionsType.SET_ACCOUNTS:
        draft.accounts = action.payload;
        break;
      case PortfolioActionsType.CHANGE_IS_SANDBOX:
        draft.isSandBox = action.payload;
        break;
      case PortfolioActionsType.SET_CURRENCY:
        draft.currencies = action.payload;
        draft.loadingState = PortfolioLoadingState.LOADED;
        break;
      case PortfolioActionsType.SET_TOKEN:
        draft.token = action.payload;
        draft.currencies = [];
        draft.items = [];
        break;
      case PortfolioActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      case PortfolioActionsType.FETCH_PORTFOLIO:
        draft.loadingState = PortfolioLoadingState.LOADING;
        draft.currencies = [];
        draft.items = [];
        break;
      default:
        break;
    }
  },
  initialNewsState
);
