import { InputBase ,Box, styled, List, ListItem} from '@mui/material'
import { Link} from 'react-router-dom'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux'
import { getProducts as listProducts} from '../../redux/actions/productActions'; 
import SearchIcon from '@mui/icons-material/Search'; 

// const  SearchIconWrapper = styled(Box)`
// color:blue;
// padding:5px;
// display:flex;
// `


const SearchConatiner = styled(Box)`
background: #fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const ListWrapper = styled(List)`
position:absolute;
background:#FFFFFF;
color: #000;
margin-top: 36px;

`

const Search = () => {


  const [text,setText] = useState('');
  const [open,setOpen] = useState(true);
  const getText = (text) =>{
    setText(text);
    setOpen(false);

  } 
  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;
  const dispatch = useDispatch();

useEffect(() =>{
  dispatch( listProducts())

},[dispatch])

  
  return (
    <SearchConatiner>
<InputSearchBase  placeholder="Search for products, brands and more"
onChange={(e) => getText(e.target.value)}
/>
<SearchIconWrapper>
  <SearchIcon />
</SearchIconWrapper>
{
  text && 
  <ListWrapper hidden={open}>
    {
      products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
        <ListItem>
          <Link to={`/product/${product.id}`}
          style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}>
                    {product.title.longTitle}         
          </Link>
        </ListItem>
      ))
    }
  </ListWrapper>
}

    </SearchConatiner>
    )
}

export default Search