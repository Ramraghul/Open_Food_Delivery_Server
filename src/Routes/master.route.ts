// Required Package Import
import express, { Request, Response } from "express";
const route = express.Router();
import USER_AUTH from './Auth_Route/User_Auth.Router';
import USER_TYPE from './User_Route/User_Type.Router';


// API Version Checking API
route.get("/", (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            status:true,
            message:'Welcome to the API version 1!'
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



//User Auth, SingIn and SingOut;
route.use('/user_auth', USER_AUTH);

//User Type;
route.use('/user_type', USER_TYPE);


// User Route
export default route;
