import express from "express";
import 'dotenv/config'
import cors from 'cors'
import { productRoute } from "./routes/product-route.js";
import { connetDb } from "./connectoin.js";
import { userRoute } from "./routes/user-route.js";
import cookieParser from "cookie-parser";
const port=process.env.PORT||3000
const app=express();
// connect mongo 
connetDb();
const corseOption={
    origin: 'https://66db40d69f3d28d3c2256e6b--cozy-salmiakki-43792f.netlify.app',
    credentials: true,

}
app.use(cookieParser());
app.use(cors(corseOption));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/api/products",productRoute);
app.use("/api/users",userRoute);

app.listen(port,()=>{
    console.log("server running on port "+ `http://localhost:${process.env.PORT||3000}`)
})
