import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";

// Connect to database
await mongoose.connect(process.env.mongo_url);1

// Create Express App
const app = express();

// Apply middlewares
app.use(express.json());

// Use routes. Other routes defined in other files can be used here
app.use(recipeRouter);

// Listen for incoming requests
app.listen(3000, ()=> {
    console.log('App listening on port 3000');
})

// _7E8sY_LU%GnETJ