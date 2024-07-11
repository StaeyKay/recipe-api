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
        // Generate a session for them. Once the user has signed up, they are logged in automatically
        req.session.user = {id: user.id}
        // Return response
        res.status(201).json('User registered successfully')
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const {email, username, phone, password} = req.body
        // Find a user using their unique identifier
        const user = await userModel.findOne({
            $or: [
                {email: email},
                {username: username},
                {phone: phone}
            ]
        });
        if (!user) {
            return res.status(401).json('No user found')
        } else {
            // Verify their password
            const correctPassword = bcrypt.compareSync(password, user.password);
            if(!correctPassword) {
                res.status(401).json('Invalid credentials')
            } else {
                // Generate a session for them
                req.session.user = {id: user.id}
                // Return response
                res.status(200).json('Login successful')
            }
        }
    } catch (error) {
        next(error);
    }
 }

export const logout = async (req, res, next) => {
    try {
        // Destroy user session
        await req.session.destroy();
        // Return response
        res.status(200).json('Logout successful')
    } catch (error) {
        next(error);
    }
 }

export const profile = async (req, res, next) => {
    try {
        // Find a user by id
        const user = await userModel
        .findById(req.session.user.id)
        .select({password: false});
        // Return response
        res.status(200).json(user)
    } catch (error) {
        next(error);
    }
 }