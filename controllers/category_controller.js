import { categoryModel } from "../models/category_model.js";
import { RecipeModel } from "../models/recipe.js";
 
export const getCategories = async (req, res, next) => {
    try {
        // Get all categories from database
        const allCategories = await categoryModel.find();
        // Return response
        res.json(allCategories);
    } catch (error) {
        next(error)
    }
}

export const postCategory = async (req, res, next) => {
    try {
        // Add a category to the database
        const newCategory = await categoryModel.create(req.body);
        // Return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error)
    }
}
