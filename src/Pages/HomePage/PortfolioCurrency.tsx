import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectCurrency,
  selectIsPosrtfolioNever,
} from "../../store/ducks/portfolio/selectors";

export const PortfolioCurrency = () => {
  const isNever = useSelector(selectIsPosrtfolioNever);
  const currencies = useSelector(selectCurrency);

  if (isNever || currencies.length === 0) {
    return <div></div>;
  }
  return (
    <Container maxWidth="sm" style={{marginBottom: 30}}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Currency</TableCell>
            <TableCell align="center">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.map((item) => (
            <TableRow key={item.currency}>
              <TableCell align="center" component="th" scope="row">
                {item.currency}
              </TableCell>
              <TableCell align="center">{item.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
