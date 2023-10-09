import { products } from "./constants/data.js"
import product from "./model/product-schema.js"

const DefaultData = async() =>{

    try{
       await  product.insertMany(products);
        console.log("Data imported successfully", error.message)


    }catch(error){
        console.log("Error while inserting the default data", error.message)
    }

}

export default DefaultData