import React, { useState } from 'react';
import axios from '../api/recipeApi';

const RecipeForm = ({ initialData = {}, onSuccess }) => {
    const [form, setForm] = useState(initialData);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initialData._id) {
            axios.put(`/recipes/${initialData._id}`, form)
                .then(onSuccess)
                .catch(err => console.error(err));
        } else {
            axios.post('/recipes', form)
                .then(onSuccess)
                .catch(err => console.error(err));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border">
            <input type="text" name="title" value={form.title || ''} onChange={handleChange} placeholder="Title" required />
            <textarea name="ingredients" value={form.ingredients || ''} onChange={handleChange} placeholder="Ingredients" required />
            <textarea name="instructions" value={form.instructions || ''} onChange={handleChange} placeholder="Instructions" required />
            <input type="text" name="cuisineType" value={form.cuisineType || ''} onChange={handleChange} placeholder="Cuisine Type" required />
            <input type="number" name="cookingTime" value={form.cookingTime || ''} onChange={handleChange} placeholder="Cooking Time" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RecipeForm;
