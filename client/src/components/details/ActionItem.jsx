import { Box, Button ,styled} from "@mui/material"
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/actions/cartActions'
import { useState } from "react";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/Paytm";
const LeftContainer = styled(Box)(({theme}) =>({
    minWidth: '40%',
 padding: '40px 0 0 80px',
 [theme.breakpoints.down('md')] : {
    padding:'20px 40px'

 }
}))



const Image = styled('img')({
    padding: '15px 20px'  ,
    border:'1px solid #f0f0f0 ',
    width:'90%'
})
const StyledButton = styled(Button)(({theme}) =>({
 width: '48%',
height: 50,
borderRadius: 2,
[theme.breakpoints.down('lg')] : {
    width:'46%'

 },
 [theme.breakpoints.down('sm')] : {
    width:'46%'

 },

}))



const ActionItem = ({product}) =>{
const navigate = useNavigate();
const { id} = product;

const[quantity , setQuantity] =useState(1);
const dispatch = useDispatch();

const addItemToCart =() =>{
dispatch(addToCart(id, quantity));
    navigate('/cart');


}
const buyNow = async() =>{
   let response= await payUsingPaytm({amount : 500 , email:'anjali@gmail.com'})
    let information = {
        action:'https://securegw-stage.paytm.in/order/process',
        params:id,

    }
    post(information);
}
 

    return(
        <LeftContainer>
            <Image  src={product.detailUrl} alt="" />
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{marginRight:10 , background:'#ff9f00'}}>< ShoppingCartIcon/>Add to Cart</StyledButton>
            <StyledButton variant="contained" onClick={()=> buyNow()} style={{background: '#fb541b'}}><FlashOnIcon />Buy now</StyledButton>
        </LeftContainer>
    )

}
export default ActionItem