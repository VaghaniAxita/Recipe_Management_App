
# Recipe Management Backend

Welcome to the Recipe Management Backend — A powerful, feature-rich backend API for managing recipes and users. This API is built using Node.js, Express.js, MongoDB, and JWT Authentication. It handles user registration, login, and full CRUD operations for recipes.


 - Deploy on Render: https://recipe-management-app-dii2.onrender.com
____________________________________________________




## Tech Stack

- Node.js: Backend runtime.
- Express.js: Web framework for routes and API.
- MongoDB: Database to store user and recipe data.
- JWT (jsonwebtoken): For authentication and route protection.
- bcryptjs: For password encryption.


## Setup

1. Clone the Repository

```bash
  https://github.com/VaghaniAxita/Recipe_Management_App
```

2. Navigate to the Project Directory:

```bash
  cd backend  
```

3. Run the server:
```bash
  nodemon
```




# Routes

### User Authentication Routes
  
  **Register  User**

- Route: POST /api/auth/register
- Description: Register a new user
- Request Body:
```bash
  {
    "name": "John",
    "email": "john@gmail.com.com",
    "password": "123456"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
    "message": "User registered successfully",
    "user": {
        "_id": "648e61c7c5d1a6123c4f4a12",
        "name": "John",
        "email": "john@gmail.com",
        "createdAt": "2024-12-01T08:23:45.123Z",
        "updatedAt": "2024-12-01T08:23:45.123Z"
    }
}
```

**User Login**

- Route: POST /api/users/login
- Description:Login an existing user
- Request Body:
```bash
 {
  "email": "john@example.com",
    "password": "123456"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg"
}
```
**Get All Users**
- Route: GET /api/auth/allusers
- Description: Fetch all registered users
- Sample Response:
    - Status: 200 OK
    -  Body:
```bash
 [
  {
    "_id": "648e61c7c5d1a6123c4f4a12",
    "name": "John",
    "email": "john@gmail.com",
    "createdAt": "2024-12-01T08:23:45.123Z",
    "updatedAt": "2024-12-01T08:23:45.123Z"
  }
]
```

### Recipe Routes

**Create a Recipe**

- Route: POST /api/recipes
- Description: 	Create a new recipe
- Request Body:
```bash
 {
    "title": "Pasta",
    "ingredients": ["Pasta", "Tomato", "Garlic"],
    "instructions": "Boil pasta, prepare sauce, mix together.",
    "cuisineType": "Italian"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
    "_id": "648e61c7c5d1a6123c4f4a20",
    "title": "Pasta",
    "ingredients": ["Pasta", "Tomato", "Garlic"],
    "instructions": "Boil pasta, prepare sauce, mix together.",
    "cuisineType": "Italian",
    "author": "648e61c7c5d1a6123c4f4a12",
    "createdAt": "2024-12-01T09:15:24.543Z",
    "updatedAt": "2024-12-01T09:15:24.543Z"
}
```

**Get All Recipes**
- Route: GET /api/recipes
- Description: Get all recipes 
- Sample Response:
    - Status: 200 OK
    -  Body:
```bash
[
  {
    "_id": "648e61c7c5d1a6123c4f4a20",
    "title": "Pasta",
    "ingredients": ["Pasta", "Tomato", "Garlic"],
    "instructions": "Boil pasta, prepare sauce, mix together.",
    "cuisineType": "Italian",
    "author": "648e61c7c5d1a6123c4f4a12"
  }
]
```

**Update a Recipe**
- Route: PUT /api/recipes/:id
- Description: Update a recipe by ID
- Request Body:
```bash
 {
    "title": "Garlic Pasta",
    "instructions": "Boil pasta, add garlic  sauce, and mix well."
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
    {
    "message": "Recipe updated successfully",
    "updatedRecipe": {
        "_id": "648e61c7c5d1a6123c4f4a20",
        "title": "Garlic Pasta",
        "ingredients": ["Pasta", "Tomato", "Garlic"],
        "instructions": "Boil pasta, add garlic sauce, and mix well.",
        "cuisineType": "Italian",
        "author": "648e61c7c5d1a6123c4f4a12"
    }
}
```

**Delete a Recipe**
- Route: DELETE /api/recipes/:id
- Description:Delete a recipe by ID
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
    "message": "Recipe deleted successfully"
}
```
  
  
