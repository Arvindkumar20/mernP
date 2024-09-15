import { Product } from "../models/product-model.js";
import { User } from "../models/user-model.js";
// find data 
const getData=async(req,res)=>{
    try {
     const products=await Product.find({});
     if(!products){
         res.status(404).json({message:"No data available",success:false});
     }
    return  res.status(201).json(products);
    } catch (error) {
     console.log(error)
    }
 }
// save product on db 
const writeData=async(req,res)=>{
    const { productName, productPrice,productDescription } = req.body;
    const userId=req.id;
try {
    if(!productName||!productPrice){
        res.status(400).json({
            message:"Please enter both product name and price",
            success:false
        });
    }
    const result=await Product.create({
        productName,productPrice,productDescription,owner:userId
    });
await result.save();
    if(!result){
        return res.status(404).json({
            message:"data not saved",
            success:false
        });
    }
    const user=await User.findById(userId);
    if (user) {
        user.products.push(result._id);
    await user.save();
    }

    return res.status(201).json({
        message:"data saved",
        success:true,
        result
    });
} catch (error) {
    console.log(error)
}    
}
//  update product 
const updateData=async(req,res)=>{
    try {
        const id =req.params.id;
        const product = await Product.findById(id);
        if(!product){
            return res.status(400).json({
                message:"product not found of given id",
                success:false
            });
        }
        const updatedProduct = await Product.findByIdAndUpdate(id,req.body,{new:true});
        if(updatedProduct){
            return res.status(200).json({message:"product updated successfully",success:true,updatedProduct
                });
                }

    } catch (error) {
      console.log(error)  
    }
}
// delete product 
const deleteData=async(req,res)=>{
    try {
       const id=req.params.id;
       const item = await Product.findById(id);
       if(!item){
       res.status(404).json({
        message:"No data found with the given id",
        success:false
       });
       }

       const  del=await Product.findByIdAndDelete(id)
       if(del){
        return res.status(200).json({message:"Data deleted successfully",success:true,del});
       }
    } catch (error) {
        console.log("error" +error)
    }
}
export {
    getData,
    writeData,
    updateData,
    deleteData,
}