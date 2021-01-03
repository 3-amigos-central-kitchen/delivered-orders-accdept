import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  }
);




// solve the duplicate items error
const OrderItemsTable = (props) => {
    const classes = useStyles();
    

    const rows=[];
    const createRows=(props)=>{
      Object.keys(props.orders).map(k=>{
          const row = props.orders[k];
          rows.push(row);
      })
    }
    createRows(props);
    
    return (
        <TableContainer component={Paper} >
        <Table className={classes.table} size="small" aria-label="Order Details">
          
          <TableHead>
            <TableRow>
                <StyledTableCell align="center">Item</StyledTableCell>
                <StyledTableCell align="center">Unit</StyledTableCell>
                <StyledTableCell align="center">Weight/unit</StyledTableCell>
                <StyledTableCell align="center">Price/unit</StyledTableCell>
                <StyledTableCell align="center">Qty</StyledTableCell>
                <StyledTableCell align="center">Expected Weight</StyledTableCell>
                <StyledTableCell align="center">Final Price</StyledTableCell>
                <StyledTableCell align="center">Taxable</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
                <StyledTableRow  key={row['calculatedPrice']}>
                    <StyledTableCell  align="center" component="th" scope="row">{row['item']}</StyledTableCell >
                    <StyledTableCell  align="center">{row['package']}</StyledTableCell >
                    <StyledTableCell  align="center">{row['weight']}</StyledTableCell >
                    <StyledTableCell  align="center">{row['price']}</StyledTableCell >
                    <StyledTableCell  align="center">{row['qty']}</StyledTableCell >
                    <StyledTableCell  align="center">{row['expectedQty']}</StyledTableCell >
                    <StyledTableCell  align="center">{row['calculatedPrice']}</StyledTableCell >
                    <StyledTableCell  align="center">{row['taxable']}</StyledTableCell >
                </StyledTableRow >
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default OrderItemsTable;



