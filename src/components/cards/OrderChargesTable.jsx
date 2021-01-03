import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';                                                          
import { Divider, Grid } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#fefefefe',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    chargeTitle:{
        paddingRight: 9,
        color: '#757575'
    },
    chargePrice:{
        paddingRight: 2
    },
  });


const OrderChargesTable = ({chargesData}) => {
    const classes = useStyles();

    const detailsTitles=[
        "Delivery", 
        "Taxable", 
        "Non Taxable",
        "QST",
        "GST",
        "Sub Total",
        "Total",
        // "Note",
    ]

    return (
        <Grid container  direction='column' justify='center' alignContent='center'>
            <Card className={classes.root} variant="outlined" raised>
                <CardContent>
                        <Grid item>
                            <Typography variant="h5"  gutterBottom>
                                Total Charges
                            </Typography>
                        </Grid>
                        {detailsTitles.map(title=>(
                            <div>
                                <Divider/>
                                <Grid container direction="row">
                                <Grid item>
                                    <Typography className={classes.chargeTitle} gutterBottom>
                                        {title}:
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.chargePrice} gutterBottom>
                                    {chargesData[title.replace(' ','').toUpperCase()]} 
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        ))}
                </CardContent>

            </Card>
            </Grid>
    )
}

export default OrderChargesTable




// "chargesData": {
//     "GST": "1.16",
//     "SUBTOTAL": "1274.60",
//     "TOTAL": "1278.07",
//     "note": "",
//     "TAXABLE": "23.15",
//     "QST": "2.32",
//     "NONTAXABLE": "1251.45",
//     "DELIVERY": "23.15"
//     },