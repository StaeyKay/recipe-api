import { Router } from "express";
import { register } from "../controllers/user_controller.js";

// Create router
const userRouter = Router();

// Define routes
userRouter.post('/register', register);

// Export router
export default userRouter;