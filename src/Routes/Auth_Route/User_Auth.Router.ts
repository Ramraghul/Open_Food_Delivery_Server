// Required Package Import
import express from "express";
const route = express.Router();
import { User_Auth_Controller } from "../../Controllers/index.controller";

//New User Sign Up Route;
route.post('/signUp', User_Auth_Controller.new_User_Sign_Up);

export default route;
