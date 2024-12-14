const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.get('/', (req,res) => {
    res.send('Welcome to recipe management Api!');
});
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);


app.listen(8090, () => console.log(`Server running on port 8090`));
