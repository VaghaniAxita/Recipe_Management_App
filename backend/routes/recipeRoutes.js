const express = require('express');
const { createRecipe, getRecipes, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createRecipe); // Create recipe
router.get('/', authMiddleware, getRecipes);   // Get all recipes
router.put('/:id', authMiddleware, updateRecipe); // Update a recipe
router.delete('/:id', authMiddleware, deleteRecipe); // Delete a recipe

module.exports = router;
