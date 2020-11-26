import { call, put, select, takeLatest } from "redux-saga/effects";
import { porftolioPositionsAPI } from "../../../services/api/porftolioPositionsAPI";
import {
  setPortfolioPositions,
  setLoadingState,
  setAccounts,
  setCurrency,
} from "./actionCreators";
import { selectIsSandbox, selectToken } from "./selectors";
import {
  FetchPortfolioActionInterface,
  PortfolioActionsType,
  SetTokenActionInterface,
} from "./ts/actionTypes";
import { Currency, PortfolioLoadingState, Position } from "./ts/state";

export function* fetchPositionsRequest({
  payload,
}: FetchPortfolioActionInterface) {
  try {
    let positions: Position[] = [];
    const isSandBox = yield select(selectIsSandbox);
    const token = yield select(selectToken);
    if (payload && token) {
      positions = yield call(
        porftolioPositionsAPI.fetchPositions,
        payload,
        token,
        isSandBox
      );
      if (positions) {
        yield put(setPortfolioPositions(positions));
      }
    }

    let currencies: Currency[] = [];
    if (payload && token) {
      currencies = yield call(
        porftolioPositionsAPI.fetchCurrencies,
        payload,
        token,
        isSandBox
      );
      if (currencies) {
        yield put(setCurrency(currencies));
      }
    }
  } catch (error) {
    yield put(setLoadingState(PortfolioLoadingState.ERROR));
  }
}
export function* authWorker({ payload }: SetTokenActionInterface) {
  try {
    const isSandBox = yield select(selectIsSandbox);

    const accounts = yield call(porftolioPositionsAPI.auth, payload, isSandBox);
    if (accounts) {
      yield put(setAccounts(accounts));
      yield put(setLoadingState(PortfolioLoadingState.LOADED));
    }
  } catch {
    yield put(setAccounts([]));
    yield put(setLoadingState(PortfolioLoadingState.ERROR));
  }
}
//"t.TbWz0jj50kBN5MlcMtLOf1SJpSCCqTNCP32n79Ywr56WdE4dyccUyS2FIlU_x8-zeUvOl94VGYMFbMSB9aE6wg"
export function* portfolioSaga() {
  yield takeLatest(PortfolioActionsType.FETCH_PORTFOLIO, fetchPositionsRequest);
  yield takeLatest(PortfolioActionsType.SET_TOKEN, authWorker);
}
