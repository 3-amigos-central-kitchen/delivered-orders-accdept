import axios from 'axios';


const baseUrl = "https://firestore-apis.herokuapp.com"

export const fetchOrderids = async()=>{
    
    let url = `${baseUrl}/getOrderIdHistory`
    console.log(url);

    // change baseurl to url after finalising production
    try{
        const data = await axios.get(baseUrl);
        console.log(data.data);
        return data.data;
    }catch(error){
        console.log(error);
    }
}

// {orderid:""}
export const fetchOrderDetails = async(id)=>{
    let url = `${baseUrl}/getOrderDetailsFromId`;
    let header = {"Access-Control-Allow-Origin": "*"};
    try{
        const res = await axios.post(url, {'orderid':id},{header});
        console.log(res.data);
        return res.data;
    }
    catch(error){
        console.log(error);
    }
}