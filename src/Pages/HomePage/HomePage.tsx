import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";

import React, { ChangeEvent, useState } from "react";
import { PortfolioPositions } from "./PortfolioPositions";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsSandbox,
  setToken,
} from "../../store/ducks/portfolio/actionCreators";
import { SelectAccountActionButtons } from "./SelectAccountActionButtons";
import { PortfolioCurrency } from "./PortfolioCurrency";
import { selectIsSandbox } from "../../store/ducks/portfolio/selectors";
const stylesHome = makeStyles(() => ({
  tokenField: {
    marginBottom: 10,
    marginTop: 10,
  },
  wrapper: {
    // display: "flex",
    height: "40vh",
  },
  formSide: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 100%",
  },
}));

export const HomePage = () => {
  const classes = stylesHome();
  const [tokenField, setTokenField] = useState<string>("");
  const isSandbox = useSelector(selectIsSandbox);
  const dispatch = useDispatch();
  const changeTokenInputHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    setTokenField(event.target.value);
  };
  const sendToken = () => {
    if (tokenField) {
      dispatch(setToken(tokenField));
    }
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.formSide}>
          <SelectAccountActionButtons />

          <div>
            <FormControl>
              <Button
                onClick={() => {
                  dispatch(setIsSandbox(!isSandbox));
                }}
              >
                <Typography variant="caption">
                  {isSandbox
                    ? "Tap for real use cases"
                    : "Tap for using sandbox"}
                </Typography>
              </Button>
              <FormGroup>
                <TextField
                  className={classes.tokenField}
                  value={tokenField}
                  type="text"
                  variant="outlined"
                  name="token"
                  label="token"
                  onChange={changeTokenInputHandler}
                />
                <Button
                  onClick={sendToken}
                  style={{ marginBottom: 20 }}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Go
                </Button>
              </FormGroup>
            </FormControl>
          </div>
        </div>
      </div>
      <PortfolioCurrency />

      <PortfolioPositions />
    </>
  );
};
