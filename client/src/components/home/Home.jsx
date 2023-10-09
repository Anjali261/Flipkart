import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import {Fragment } from 'react'
import { Box } from '@mui/material'
import { styled} from "@mui/material"
 import {getProducts} from "../../redux/actions/productActions"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import MidSlide from './MidSlide'
 import MidSection from './MidSection'
const Component = styled(Box)`
padding: 10px;
background: #F2F2F2;
`

const Home = () => {

  const {products , title } = useSelector((state) => state.getProducts);
  
  const dispatch = useDispatch();

useEffect(() =>{
  dispatch(getProducts());

},[dispatch])

  return (
    <>
    <NavBar/>
    <Component>
    <Banner/>
    <MidSlide products={products} title="Deal of the Day" timer={true} />
    <MidSection />
    <Slide products={products} title="Discount for You" timer={false}/>
    <Slide products={products} title="Suggested Items" timer={false} />
    <Slide products={products} title="Top selections" timer={false}/>
    <Slide products={products} title="Trending Offers" timer={false}/>
    <Slide products={products} title="Top deals on Accessories" timer={false}/>

    </Component>
    
    </>

    )
}

export default Home