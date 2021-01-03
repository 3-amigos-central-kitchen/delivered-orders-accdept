import React,{useEffect,useState} from 'react'
import { fetchOrderids } from '../../api'
import OrderIdCards from '../cards/OrderIdCards';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import './styles.css'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#EEEEEE',
    },
});


const Orders = () => {

    const classes = useStyles();
    const [orderids,setOrderIds] = useState([]);


    const renderOrderIds =() =>{
        return (
            //TER12241613
            orderids.map(orderid=>(
                <Grid container  direction="row" justify="center" alignItems="center" className={classes.root}>
                    <OrderIdCards orderid={orderid}/>
                </Grid>
            )) )
    }


    useEffect(()=>{
        const fetchApi = async()=>{
            setOrderIds(await fetchOrderids());
            // console.log(orderids);
        }
        fetchApi();
    },[]);
    

    return (
        <div>
            {
                (orderids.length>0)
                ? renderOrderIds()
                : <h1>Loading</h1>
            }
        </div>
    )
}

export default Orders
