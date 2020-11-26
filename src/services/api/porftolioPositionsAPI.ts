import axios from "axios";
import {
  accountData,
  Currency,
  Position,
} from "../../store/ducks/portfolio/ts/state";
import { mainUrl, sandBoxUrl } from "./config";

export const porftolioPositionsAPI = {
  fetchPositions(
    payload: string,
    token: string,
    isSandBox: boolean
  ): Promise<Position[]> {
    return axios
      .get(`${isSandBox ? sandBoxUrl : mainUrl}portfolio`, {
        params: { brokerAccountId: payload },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => data.payload.positions);
  },
  fetchCurrencies(
    payload: string,
    token: string,
    isSandBox: boolean
  ): Promise<Currency[]> {
    return axios
      .get(`${isSandBox ? sandBoxUrl : mainUrl}portfolio/currencies`, {
        params: { brokerAccountId: payload },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => data.payload.currencies);
  },
  auth(payload: string, isSandBox: boolean): Promise<accountData[]> {
    return axios
      .get(`${isSandBox ? sandBoxUrl : mainUrl}user/accounts`, {
        headers: {
          Authorization: `Bearer ${payload}`,
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => data.payload.accounts);
  },
};
