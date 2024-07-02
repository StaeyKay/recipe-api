import { Router } from "express";
import { localUpload } from "../middlewares/upload.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipeController.js";

// Create a router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.get('/recipes/:id', getRecipe);

recipeRouter.post('/recipes', localUpload.single('image'), postRecipes);

recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

// Export recipeRouter
export default recipeRouter;