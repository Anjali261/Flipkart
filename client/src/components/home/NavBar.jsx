import { Box , Typography, styled} from '@mui/material'
import React from 'react'
import { navData  } from '../../constrants/data'

const Component = styled(Box)(({ theme }) => ({ 
display:'flex',
margin:'55px 130px 0 130px',
justifyContent:'space-between',
overflow:'overlay',
[theme.breakpoints.down('lg')]: {
  margin: 0
}
}));


const Conatiner = styled(Box)`
padding: 12px 8px;
text-align:center;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;


`


const NavBar = () => {
  return (
    <Box style={{background: ' #fff'}}>
    <Component>
        {
            navData.map(data =>(
                <Conatiner>
                    <img src={data.url} alt="nav" style={{width:65}} />
                    <Text>{data.text}</Text>
                    </Conatiner>


            ))
        }
    </Component>
    </Box>
  )
}

export default NavBar