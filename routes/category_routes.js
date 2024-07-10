import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category_controller.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";

// Create a router
const categoryRouter = Router();

// Define routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', checkUserSession, remoteUpload.single('image'), postCategory);

// Export router
export default categoryRouter;