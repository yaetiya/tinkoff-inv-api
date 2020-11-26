import {
  CircularProgress,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsPosrtfolioError,
  selectIsPosrtfolioLoading,
  selectIsPosrtfolioNever,
  selectPositions,
} from "../../store/ducks/portfolio/selectors";

export const PortfolioPositions = () => {
  const isLoading = useSelector(selectIsPosrtfolioLoading);
  const isError = useSelector(selectIsPosrtfolioError);
  const isNever = useSelector(selectIsPosrtfolioNever);
  const positions = useSelector(selectPositions);
  if (isLoading) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress />
      </div>
    );
  }
  if (isError) {
    return (
      <div style={{ textAlign: "center" }}>
        <Typography>The token is not correct</Typography>
      </div>
    );
  }
  if (isNever) {
    return <div></div>;
  }
  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Ticker</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Balance</TableCell>
              <TableCell align="right">Lots</TableCell>
              <TableCell align="right">Instrument Type</TableCell>
              <TableCell align="right">blocked</TableCell>
              <TableCell align="right">figi</TableCell>
              <TableCell align="right">isin</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positions.map((item) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.ticker}
                </TableCell>

                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">
                  <b>{item.balance}</b>
                </TableCell>
                <TableCell align="right">{item.lots}</TableCell>
                <TableCell align="right">{item.instrumentType}</TableCell>
                <TableCell align="right">{item.blocked}</TableCell>
                <TableCell align="right">{item.figi}</TableCell>
                <TableCell align="right">{item.isin}</TableCell>
                <TableCell align="right">{item.averagePositionPrice}</TableCell>
                <TableCell align="right">
                  {item?.averagePositionPrice && item?.expectedYield ? (
                    <b>
                      {item?.averagePositionPrice?.value * item.balance}
                      {item?.averagePositionPrice?.currency} (
                      {item?.expectedYield.value}
                      {item?.averagePositionPrice?.currency})
                    </b>
                  ) : (
                    "nothing"
                  )}
                </TableCell>
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
