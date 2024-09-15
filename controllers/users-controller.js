import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config'
import { User } from "../models/user-model.js"
import { Product } from "../models/product-model.js";

export const getUsers = async (req, res) => {
    try {
        const user = await User.find();
        console.log(user)
        if (!user||user===null) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.json({
            status: 200,
            data: user
        })
    } catch (error) {
        console.log(error);
    }
}

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please enter all fields",
                success: false
            });
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "Email already exists",
                success: false
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });
        const token = jwt.sign({ uid: newUser._id }, process.env.SECRET_KEY,{ expiresIn: '1d' });
        return res.cookie('token',token,{httpOnly:true,sameSite:'strict',maxAge:1*24*60*60*1000}).json({
            message:`Welcome back ${user.name}`,
            success:true,
            user,
            token
        });
} catch (error) {
        console.log(error)
    }
}

export const login=async(req,res,next)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({
                message:"Please enter all fields",
                success:false
                });
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"User not found",
                success:false
                });
                }
         const  isMatchPassword=await bcrypt.compare(password,user.password);
         if(!isMatchPassword){
            return res.status(400).json({
                message: "Invalid password",
                success: false
                });
                }
                const token=jwt.sign({uid:user._id,user:user.name},process.env.SECRET_KEY,{expiresIn:60*60*24});
                // console.log(token.uid);
                    
                return res.cookie('token',token,{httpOnly:true,sameSite:'strict',maxAge:1*24*60*60*1000}).json({
                    message:`Welcome back ${user.name}`,
                    success:true,
                    user,
                    token
                });
    } catch (error) {
        console.log(error)
    }
}
// export const logout=async(req,res)=>{
//     const userId=req.id;
//     return res.clearCookie('token');
// }