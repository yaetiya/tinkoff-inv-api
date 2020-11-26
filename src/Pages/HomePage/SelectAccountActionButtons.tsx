import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPositions } from "../../store/ducks/portfolio/actionCreators";
import { selectAccounts } from "../../store/ducks/portfolio/selectors";

export const SelectAccountActionButtons = () => {
  const accountsData = useSelector(selectAccounts);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", marginRight: 20 }}>
      {accountsData.length !== 0 ? (
        <Typography variant="h6">Choose your account</Typography>
      ) : null}
      {accountsData.map((account) => (
        <Button
          onClick={() => {
            dispatch(fetchPositions(account.brokerAccountId));
          }}
        >
          {account.brokerAccountId}
        </Button>
      ))}
    </div>
  );
};
