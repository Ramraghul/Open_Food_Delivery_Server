import { Request, Response } from 'express';
import { validationResult } from 'express-validator'; 
import UserTypeModel from '../../model/User_Type_Model';

const User_Type_Controller = {
    async add_New_User_Type(req: Request, res: Response) {
        try {
            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    message: 'Validation failed',
                    errors: errors.array(),
                });
            }

            const { name } = req.body;

            // Check if the user type already exists
            const existingUserType = await UserTypeModel.findOne({ name: name.trim() });
            if (existingUserType) {
                return res.status(409).json({
                    success: false,
                    message: `User type "${name}" already exists.`,
                });
            }

            // Insert new data
            const newUserType = await UserTypeModel.create({ name: name.trim() });

            // Respond with success
            res.status(201).json({
                success: true,
                message: 'New user type created successfully.',
                data: newUserType,
            });
        } catch (error) {
            // Handle the error type
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : 'An unknown error occurred.';

            console.error('User_Type_Addition_Error:', error);

            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                error: errorMessage,
            });
        }
    },
};

export default User_Type_Controller;
