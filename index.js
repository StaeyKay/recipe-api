import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";

// Connect to database
await mongoose.connect(process.env.mongo_url);

// Create Express App
const app = express();

// Apply middlewares
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.json('Welcome home')
});

app.post('/login', (req, res) => {
    res.json('Login successful')
});

app.patch('/define', (req, res) => {
    res.json('You just defined a new endpoint')
})

// Use routes. Other routes defined in other files can be used here
app.use(recipeRouter);

// Listen for incoming requests
app.listen(3000, ()=> {
    console.log('App listening on port 3000');
})

// _7E8sY_LU%GnETJ