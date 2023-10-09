
import Product from "../model/product-schema.js"

export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {

    }
}

export const getProductById = async(req,res) =>{
    try{
        const id = req.params.id;
       const product = await Product.findOne({'id': id})
       res.status(200).json(product);

    }catch(error){
        res.status(500).json({message: error.message})

    }
}