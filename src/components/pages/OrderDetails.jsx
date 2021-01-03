import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import { fetchOrderDetails } from '../../api/index';
import DataTable from '../cards/DataTable';
import OrderChargesTable from '../cards/OrderChargesTable';

const OrderDetails = ({match}) => {

    const [chargesData,setChargesData] = useState({});
    const [orderData,setOrderData] = useState({});

    const fetchDetails = async()=>{
        const data = await fetchOrderDetails(match.params.id);
        setOrderData({})
        setChargesData({})
        setChargesData(data.chargesData);
        setOrderData(data.order);
    }

    useEffect(()=>{
        
        fetchDetails()    
    },[])


    return (
        
            <Grid container spacing={2} justify="space-around" >
                <Grid item lg={9} md={9} sm={12} xs={12}> <DataTable orders={orderData}/> </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}> <OrderChargesTable chargesData={chargesData}/> </Grid>
            </Grid>
    )
}

export default OrderDetails
