import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import DefaultData from './default.js'
import Router from './routes/route.js';
import {v4 as uuid} from 'uuid'
const app = express()
const PORT = 8000;
app.use(cors())
app.use(bodyParser.json({extend:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);

Connection();
app.listen(PORT , () =>{
    console.log(`Server i running at PORT ${PORT}`)
})
DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let PaytmParams ={};
PaytmParams['MID'] = process.env.PAYTM_MID;
PaytmParams['WEBSITE   '] = process.env.PAYTM_WEBSITE;
PaytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
PaytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
PaytmParams['ORDER_ID'] = uuid();
PaytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
PaytmParams['TXN_AMOUNT'] = '100';
PaytmParams['CALLBACK_URL'] = `http://localhost:8000/callback`;
PaytmParams['EMAIL'] = `learncode2610@gmail.com`;
PaytmParams['MOBILE_NO'] = `1234567890`;






