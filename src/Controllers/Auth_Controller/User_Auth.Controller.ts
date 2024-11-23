// Required Package Import
import { Request, Response } from 'express';

//Main User Auth Controller;
const User_Auth_Controller = {

    //New User Sign Up API
    async new_User_Sign_Up(req: Request, res: Response) {
        try {
            return res.status(200).json({
                Success:true,
                message:"I am Working On It"
            })
        } catch (error) {
            console.error('User_Sign_In_Server_Error_Log:', error);
            res.status(500).json({ 
                success:false,
                message: 'Internal Server Error',
                error:error 
            });
        }
    },

};


export default User_Auth_Controller;
