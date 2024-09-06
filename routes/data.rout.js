import express from "express";
import {  writeData,
    getData, 
    deleteData,
    updateData
 } from "../controllers/data.controller.js";
const dataRoute=express.Router();
dataRoute.get("/",getData);
dataRoute.post("/",writeData);
dataRoute.delete("/:id",deleteData);
dataRoute.patch("/update/:id",updateData);
    export {
        dataRoute,
    }