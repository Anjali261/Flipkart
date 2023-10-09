import React from 'react'
import {Box, Button, Dialog, TextField, Typography, styled} from "@mui/material"
import { useState, useContext } from 'react'
import { authenticateSignup , authenticatelogin } from '../../service/api'
import  { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
height:70vh;
width:90vh;
padding: 0;
padding-top: 0;
`
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
height:83%;
width: 22%;
padding: 45px 35px;
&>p , & > h5{
    color:#fff;
    font-weight:600;
}
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
overflow: auto;
flex:1;
& > div , & > button , & > p {
    margin-top: 20px;
}

`
const LoginButton = styled(Button)`
text-transform:none;
background: #FB641B;
color:#fff;
height: 48px;
border-radius:2px;

`

const Text = styled(Typography)`
font-size:12px;
color:#878787;
`

const RequestOtp = styled(Button)`
text-transform:none;
background: #fff;
color:#2874f0;
height: 48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20% );

`

const CreateAccount = styled(Box)`
font-size:14px;
text-align:center;
font-weight:600;
cursor:pointer;
color:#878787;
margin: auto 0 5px 0;

`
const Error = styled(Typography)`
font-size : 10px;
color: #ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`

const LoginDialog = ({open , setOpen}) => {
   
   
    const handleClose=() =>{
        setOpen(false);
        toggleAccount(accountInitalValue.login);
        setError(false);

    }
const accountInitalValue = {
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get Access to Your Orders, wishlist and Recommendations'

    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:"Signup with your Mobile to get Started"
    }
}

    const [account ,toggleAccount] = useState(accountInitalValue.login)
  
    const toggleSignup = () =>{
        toggleAccount(accountInitalValue.signup);
    }

    // Signup Form -- Taking Input 
const signupInitialValues={
firstname:"",lastname:"",username:"",email:"",password:"",phone:""
}

    const[signup,setSignup] = useState(signupInitialValues);
    const onInputChange = (e) =>{
        setSignup({...signup,[e.target.name] : e.target.value })
        // console.log(signup)
    } 
    const { setAccount} = useContext(DataContext)


    const signupUser =async () =>{
       let response = await authenticateSignup(signup);
        console.log(response);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname)

    }

    // Login
    const loginInitialValues = {
        username:"",
        password:""
    }
const[login , setLogin] = useState(loginInitialValues);
const [error,setError] = useState(false)
    const onValueChange = (e) =>{
        setLogin({...login, [e.target.name]: e.target.value})

    }
  const loginUser = async() =>{
  let response =  await authenticatelogin(login);
console.log(response);
if(response.status === 200 ){
    handleClose();
    setAccount(response.data.data.firstname);
}else{
setError(true);
}
  }
    return (
   <Dialog open ={open} onClose={handleClose} PaperProps={{ sx: { maxWidth : 'unset'}}}>
    <Component>
        <Box style={{display:'flex' , height:'100%'}}>
        <Image>
        <Typography variant='h5'>{account.heading}</Typography>
        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
        </Image>
        {
            account.view === 'login' ?
            <Wrapper>
            <TextField variant='standard'  onChange={(e) => onValueChange(e)} name="username" label="Enter Username" />
            {error &&   <Error>Please Enter valid Username or Password</Error>}
            <TextField variant='standard' onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
            <Text>By continuing, you agree to Flipkart's Terms of use and Privacy policy.</Text>
            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
            <Typography style={{textAlign:"center"}}>OR</Typography>
            <RequestOtp>Request OTP</RequestOtp>
            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>

        </Wrapper>
        :
        <Wrapper>
        <TextField variant='standard' onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
        <TextField variant='standard' onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" />
        <TextField variant='standard' onChange={(e) => onInputChange(e)} name="username"label="Enter Username" />
        <TextField variant='standard' onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
        <TextField variant='standard' onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
        <TextField variant='standard' onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone Number" />


        <LoginButton onClick={ () => signupUser()} > Continue</LoginButton>

    </Wrapper>
        }
       
        </Box>
    </Component>

   </Dialog>
  )
}

export default LoginDialog