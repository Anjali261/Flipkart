
import paytmchecksum from "../paytm/PaytmChecksum.js"
import { PaytmParams , paytmMerchantKey } from "../index.js"
import PaytmChecksum from "../paytm/PaytmChecksum.js";
// import PaytmChecksum from "../paytm/PaytmChecksum.js"
export const addPaymentGateway = async(req,res)=>{
    try{
     let paytmchecksum= await paytmchecksum.generateSignature(paytmParams , paytmMerchantKey);
            let params = {
                ...paytmParams , 'CHECKSUMHASH': PaytmChecksup
            }
            res.status(200).json(params);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}