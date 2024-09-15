import express from "express";
import { 
     writeData,
    getData, 
    deleteData,
    updateData
 } from "../controllers/products-controller.js";
import { isAuthorised } from "../middlewares/isAuthorised.js";
const productRoute=express.Router();
productRoute.get("/",isAuthorised,getData);
productRoute.post("/",isAuthorised,writeData);
productRoute.delete("/:id",isAuthorised,deleteData);
productRoute.patch("/update/:id",isAuthorised,updateData);
    export {
        productRoute,
    }