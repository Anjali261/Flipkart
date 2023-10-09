
import axios from 'axios';
import * as actionType from '../constrants/cartConstant';

const URL = "http://localhost:8000"

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) =>(dispatch)=>{
    dispatch({type:actionType.REMOVE_FROM_CART, payload: id});
}