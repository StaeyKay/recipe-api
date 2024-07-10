import { Router } from "express";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipeController.js";
import { checkUserSession } from "../middlewares/auth.js";

// Create a router
const recipeRouter = Router();

// Apply middlewares
recipeRouter.use(checkUserSession);

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.get('/recipes/:id', getRecipe);

recipeRouter.post('/recipes',checkUserSession, remoteUpload.single('image'), postRecipes);

recipeRouter.patch('/recipes/:id', checkUserSession, patchRecipe);

recipeRouter.delete('/recipes/:id', checkUserSession, deleteRecipe);

// Export recipeRouter
export default recipeRouter;