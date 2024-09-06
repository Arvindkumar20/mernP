import express from "express";
import 'dotenv/config'
import cors from 'cors'
import { dataRoute } from "./routes/data.rout.js";
import { connetDb } from "./connectoin.js";
const port=process.env.PORT||3000
const app=express();
// connect mongo 
connetDb();
const corseOption={
    origin: 'https://66db40d69f3d28d3c2256e6b--cozy-salmiakki-43792f.netlify.app',
    credentials: true,

}
app.use(cors(corseOption));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/",dataRoute);

app.listen(port,()=>{
    console.log("server running on port "+ `http://localhost:${process.env.PORT}`)
})
