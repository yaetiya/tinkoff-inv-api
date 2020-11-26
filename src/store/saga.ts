import { all } from "redux-saga/effects";
import { portfolioSaga } from "./ducks/portfolio/sagas";

export default function* rootSaga() {
  yield all([portfolioSaga()]);
}
