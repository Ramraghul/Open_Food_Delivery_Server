import express from "express";
import { User_Type_Controller } from "../../Controllers/index.controller";
import { body } from 'express-validator';

const route = express.Router();

// New User Type Route with Body Validation
route.post(
    '/newUserType',
    body('name').notEmpty().withMessage('Name is required').isString().withMessage('Name must be a string'),
    User_Type_Controller.add_New_User_Type
);

export default route;
