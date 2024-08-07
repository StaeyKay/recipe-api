import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import expressOasGenerator from "express-oas-generator";
import session from "express-session";
import MongoStore from "connect-mongo";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category_routes.js";
import userRouter from "./routes/user_router.js";

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
app.use(express.static('uploads')); //Upload files locally
app.use(session({
    secret: process.env.SESSION_SECRET, //encrypts the file
    resave: false,
    saveUninitialized: true,
    // cookie: {secure: true}
    store: MongoStore.create({
        mongoUrl: process.env.mongo_url
    })
}));

// Use routes. Other routes defined in other files can be used here
app.use(userRouter);
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

