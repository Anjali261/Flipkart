
// using redux you have to take help of middleware.
// 

import axios from 'axios'
import React from 'react'
import * as actionTypes from '../constrants/productConstant'
const URL = "http://localhost:8000"; 
export const getProducts = () => async (dispatch) => {
 try{
  const {data} =  await axios.get(`${URL}/products`);
//   console.log(response);
dispatch({type:actionTypes.GET_PRODUCT_SUCCESS, payload:data});
 }catch(error){
    dispatch({type:actionTypes.GET_PRODUCT_FAIL,paylaod:error.message})
 }
}

export default getProducts

export const getProductDetails =(id) => async(dispatch) =>{
   try{
      dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})
      const {data} =  await axios.get(`${URL}/product/${id}`);
      dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data});

   }catch(error){
      dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL,paylaod:error.message})



   }
}