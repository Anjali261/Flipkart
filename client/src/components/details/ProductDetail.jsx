import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText = styled(Box)`
font-size: 14px;
vartical-align:baseline;
& > p{
    font-size:14px;
    margin-top:10px;
}
`
const StyledBadge = styled(LocalOfferIcon)`
margin-right:10px;
color:#00CC00;
font-size:15px;

`
const columnText = styled(TableRow)`
font-size:14px;
vartical-align:baseline;

& > td:{
    font-size:14px;
    margin-top: 10px;
    border:none;
}
`


const ProductDetail =({product}) =>{

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+ (5 * 24 *60 * 60 *1000))


    return(
        <>
        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop:5, color:'#878787', fontSize:14}}>8 Ratings & 1 Reviews
                        <Box component = "span"><img src={fassured} alt="" style={{width:77, marginLeft:20}}/></Box>
                        </Typography>
                        <Typography>
                            <Box component="span"style={{ fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{color: '#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;
                            <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}off</Box>

                        </Typography>
                        <Typography>available Offers</Typography>
                        <SmallText>
                            <Typography><StyledBadge/>Get extra 20% off upto ₹50 on 1 item(s) T&C</Typography>
                            <Typography><StyledBadge/> Get extra 12% off (price inclusive of discount) T&C</Typography>
                            <Typography>Sign up for Flipkart pay Later and get Flipkart Gift Card with ₹100*Know More</Typography>
                            <Typography><StyledBadge/> GetPurchase now & get 1 surprise cashback coupon in Future*Know More</Typography>
                            <Typography><StyledBadge/> Get10% Instant Discount on Citibank Credit Card, up to ₹1250, on orders of ₹5,000 and above T&C</Typography>
                            <Typography><StyledBadge/> GetFlat ₹25 Instant Discount on Paytm UPI. Min Order Value ₹300. Valid once per Flipkart account T&C</Typography>
                        </SmallText>
                        <Table>
                            <TableBody>
                                <columnText>
                                    <TableCell style={{color:'#878787'}}>Delivery </TableCell>
                                    <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>

                                </columnText>
                                <columnText>
                                    <TableCell style={{color:'#878787'}}>Warranty </TableCell>
                                    <TableCell >No Warranty</TableCell>
                                    
                                </columnText>
                                <columnText>
                                    <TableCell style={{color:'#878787'}}>Seller </TableCell>
                                    <TableCell style={{color:'#2874f0'}} >
                                        <Box component = "span">SuperCornNet</Box>
                                        <Typography>GST invoice available</Typography>
                                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                                    </TableCell>
                                    
                                </columnText>
                                <columnText>
                                    <TableCell colSpan={2} >
                                        <img src={adURL} style={{width: 300}} alt="flipkartpoints" />
                                    </TableCell>
                                </columnText>
                                <columnText>
                                    <TableCell style={{color:'#878787'}}>Warranty </TableCell>
                                    <TableCell >{product.description}</TableCell>
                                    
                                </columnText>
                                
                            </TableBody>
                        </Table>
        
        </>
    )

}
export default ProductDetail;