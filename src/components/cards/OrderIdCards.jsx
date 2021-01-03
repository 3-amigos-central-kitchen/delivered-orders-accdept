import React from 'react';
import { Grid,Card, CardActions, CardContent, CardActionArea, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        textDecoration: 'none',
        margin:'10px 50px',
      
    },
    title: {
        fontSize: 14,
    },
    pos: {
        margin: '10px 10px',
    },
    
});

const OrderIdCards = ({orderid}) => {
    const classes = useStyles();
    const date=orderid.slice(-8);
    // console.log(orderid);

    return (
        <Card className={classes.root} component={Link} to={`/${orderid}`}>
            <CardActionArea>                
            <CardContent>
               
                <Grid container spacing={2} justify="space-evenly">
                    <Grid item >
                        <Typography className={classes.pos} variant="h5" component="h2">
                            {orderid}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography className={classes.pos} color="textSecondary">
                            Date: {`${ date.substring(0,2)} / ${ date.substring(2,4)}`}<br/>
                            Time: {`${ date.substring(4,6)} : ${ date.substring(6,8)}`}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default OrderIdCards
