import express from "express";
import { 
    getUsers, 
    login, 
    signup
 } from "../controllers/users-controller.js";

const userRoute = express.Router();

userRoute.get("/", getUsers);
userRoute.post("/signup", signup);
userRoute.post("/login", login);
export {
    userRoute
}