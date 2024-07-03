import { categoryModel } from "../models/category_model.js";
// import { RecipeModel } from "../models/recipe.js";

export const getCategories = async (req, res, next) => {
    try {
        // Get query parameters
        const { 
            filter = "{}", //use curly braces when expecting something to return as an object
            sort = "{}",
            fields = "{}",
            limit = 10, 
            skip = 0 
         } = req.query;
        // Get all categories from database
        const allCategories = await categoryModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
// Return response
res.json(allCategories);
    } catch (error) {
    next(error)
}
}

export const postCategory = async (req, res, next) => {
    try {
        // Add a category to the database
        const newCategory = await categoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error)
    }
}
