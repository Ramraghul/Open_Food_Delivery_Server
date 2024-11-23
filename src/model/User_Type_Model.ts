import mongoose, { Schema, Document, model } from 'mongoose';

// Define the User Type interface
export interface IUserType extends Document {
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the schema for User Type
const UserTypeSchema = new Schema<IUserType>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// Create the Mongoose model
const UserTypeModel = model<IUserType>('UserType', UserTypeSchema);

export default UserTypeModel;
