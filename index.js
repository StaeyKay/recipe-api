import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import expressOasGenerator from "express-oas-generator";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category_routes.js";

// Connect to database
await mongoose.connect(process.env.mongo_url);

// Create Express App
const app = express();
// The following lines of code are to generate the documentation. First install express-oas-generator
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// Apply middlewares
app.use(cors())
app.use(express.json());
app.use(express.static('uploads'));

// Use routes. Other routes defined in other files can be used here
app.use(recipeRouter);
app.use(categoryRouter);
// The following lines of code are to generate the documentation. First install express-oas-generator
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs'));

// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`App listening on ${port}`);
})

