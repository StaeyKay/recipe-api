import bcrypt from "bcrypt";
import { userModel } from "../models/user_model.js";

// Define arrow functions for register
export const register = async (req, res, next) => {
    try {
        // Hash user password using the bcrypt tool
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        // Create a new user
        const registeredUser = await userModel.create({
            ...req.body,
            password: hashedPassword
        });
        // Return response
        res.status(201).json('User registered successfully')
    } catch (error) {
        next(error)
    }
}

export const login = async () => { }

export const logout = async () => { }

export const profile = async () => { }