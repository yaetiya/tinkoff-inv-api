import { combineReducers } from "redux";
import { portfolioReducer } from "./ducks/portfolio/reducer";

export const rootReducer = combineReducers({
    portfolio: portfolioReducer,
  });
  