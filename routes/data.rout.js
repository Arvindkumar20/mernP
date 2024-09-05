import express from "express";
import {  writeData,
    getData, 
    deleteData,
    updateData
 } from "../controllers/data.controller.js";
const dataRoute=express.Router();
dataRoute.get("/allData",getData);
dataRoute.post("/saveData",writeData);
dataRoute.delete("/deleteData/:id",deleteData);
dataRoute.patch("/update/:id",updateData);
    export {
        dataRoute,
    }