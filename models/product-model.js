import mongoose from "mongoose"
const productSchema=mongoose.Schema({
    productName:{type:String,required:true},
    productPrice:{type:String,required:true},
    date:{type:Date},
    productImage:{type:String},
    productDescription:{type:String},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"User"},


},
{
    timestamps:true
    }
)
export const Product=mongoose.model("Product",productSchema);