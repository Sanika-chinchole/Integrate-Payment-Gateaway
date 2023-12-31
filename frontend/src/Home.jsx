import React from "react";
import {Box,  Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";

const Home = ()=>{

    const checkoutHandler=async (amount)=>{
        const {data:{key}}= await axios.get("http://localhost:4000/api/getkey")
        const {data:{order}}= await axios.post("http://localhost:4000/api/checkout",{
         amount
        })
        const  options = {
            key, 
            amount: order.amount, 
            currency: "INR",
            name: "programmer",
            description: "Integrate Payment Gateway",
            image: "https://www.shutterstock.com/image-vector/fast-pay-logo-design-finance-260nw-1669932124.jpg",
            order_id: order.id, 
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9000090000"
            },   
                notes: {
                  address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#231F20"
            }
        };
        const razor = new  window.Razorpay(options);
            razor.open();
    }

    return(
       <Box>
        <Stack h={"100vh"} alignItems="center" justifyContent="Center" direction={["column","row"]}>
            <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png?v=1620371415"}  checkoutHandler={checkoutHandler}/>
            <Card amount={3000} img={"https://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"}  checkoutHandler={checkoutHandler}/>
        </Stack>
       </Box>
    )
}


export default Home;