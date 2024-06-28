import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category_routes.js";

// Connect to database
await mongoose.connect(process.env.mongo_url);

// Create Express App
const app = express();

// Apply middlewares
app.use(express.json());

// Use routes. Other routes defined in other files can be used here
app.use(recipeRouter);
app.use(categoryRouter);

// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`App listening on ${port}`);
})

// _7E8sY_LU%GnETJ