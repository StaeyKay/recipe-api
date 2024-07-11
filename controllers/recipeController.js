import { RecipeModel } from "../models/recipe.js";

// Get all recipes
export const getRecipes = async (req, res, next) => {
    try {
        // Get query parameters
        const { limit, skip, filter, fields } = req.query;
        // Get all recipes from database
        const allRecipes = await RecipeModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        // Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error)
    }
}

// Post recipe
export const postRecipes = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.json(newRecipe);
    } catch (error) {
        next(error)
    }
}


// Patch recipe
export const patchRecipe = async (req, res, next) => {
    try {
        // Update recipe by id
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // Return response
        res.json(updatedRecipe)
    } catch (error) {
        next(error)
    }
}


// Delete recipe
export const deleteRecipe = async (req, res, next) => {
    try {
        // Delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id)
        // Return response
        res.json(deletedRecipe)
    } catch (error) {
        next(error)
    }
}

// Get recipe with a unique id
export const getRecipe = async (req, res, next) => {
    try {
        // Return by id
        const returnData = await RecipeModel.findById(req.params.id)
        res.json(returnData);
    } catch (error) {
        next(error)
    }
}