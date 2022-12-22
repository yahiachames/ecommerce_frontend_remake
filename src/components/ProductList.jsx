import React, { useEffect, useState } from "react";
import axios from 'axios'
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const ProductList = () => {
  const [productList , setProductList] = useState([])
  console.log(process.env.REACT_APP_API_KEY,"api key")
  const getProducts = () => {
    axios.get(`http://${process.env.REACT_APP_API_KEY}/product_list/` , {headers : {
      "Access-Control-Allow-Origin" : "*",
   
    }}).then(res => {
      console.log(res)
      setProductList(res.data)}).catch(err => console.log(err))
  }
  useEffect(() => {
    getProducts()
  }, [])


  return (<>
    <div className="py-5">
      <div className="container">
        <Title name="our" title="products" />
        <div className="row">
          
            {
               productList.map((product,index) => {
                return <Product key={index} product={product} />;
              })
           }
        
        </div>
      </div>
    </div>
  </>)
}




export default ProductList;
