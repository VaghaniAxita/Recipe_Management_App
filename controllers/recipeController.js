const Recipe = require('../models/Recipe');

const createRecipe = async (req, res) => {
    try {
        const recipe = new Recipe({ ...req.body, author: req.user.id });
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({ author: req.user.id });
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteRecipe = async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createRecipe, getRecipes, updateRecipe, deleteRecipe };
