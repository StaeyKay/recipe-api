import { Router } from "express";
import { login, logout, profile, register } from "../controllers/user_controller.js";
import { checkUserSession } from "../middlewares/auth.js";

// Create router
const userRouter = Router();

// Define routes
userRouter.post('/register', register);

userRouter.post('/login', login);

userRouter.post('/logout', checkUserSession, logout);

userRouter.get('/profile', checkUserSession, profile);

// Export router
export default userRouter;