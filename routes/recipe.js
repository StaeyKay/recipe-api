import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

// Create a router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', (req, res) => {
    res.json('All recipes');
});

recipeRouter.get('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} retrieved`);
});

recipeRouter.post('/recipes', async (req, res) => {
    // Add recipe to database
    await RecipeModel.create(req.body);
    // Return response
    res.json("Recipe added");
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} deleted`)
});

// Export recipeRouter
export default recipeRouter;