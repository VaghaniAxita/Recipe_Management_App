
# 🍽️ Recipe Management Application


A full-stack web application for managing your favorite recipes! Users can create, view, edit, and delete recipes, with seamless user authentication and intuitive UI.

## 📚 Features 

### Frontend

- 📝 **Recipe Listing**: Search and filter recipes by ingredients or cuisine.  
- 🧾 **Recipe Detail View**: View complete recipe details with options to edit or delete.  
- 📋 **Forms**: Add or edit recipes with fields for title, ingredients, instructions, cuisine, and cooking time.  
- 🎨 **Modern Styling**: Built using Tailwind CSS and Material UI.  

### Backend
- 🔒 **User Authentication**: Secure JWT-based login and registration.  
- 🍲 **Recipe CRUD**: APIs for creating, reading, updating, and deleting recipes.  
- 🗄️ **Database**: MongoDB for efficient and flexible data storage.  




## 🛠️ Tech Stack  

**Frontend:** 

- React.js 
- Tailwind CSS / Material UI  
- Axios  

**Backend:** 

- Node.js  
- Express.js 
- MongoDB 

**Database:** 

    * MongoDB: NoSQL database for storing recipe details.
## Backend Setup

Navigate to the backend folder:

```bash
  cd recipe-management-backend
```

Install dependencies:

```bash
  npm init -y
  npm install express mongoose cors body-parser dotenv    
```

Create a .env file:

```bash
  MONGO_URI=your_mongo_db_connection_string
  JWT_SECRET=your_jwt_secret
```

Run the backend server:
```bash
  node server.js
```

## Frontend Setup

Navigate to the frontend folder:
```bash
 cd recipe-management-frontend
```

Install dependencies:
```bash
  npm install axios react-router-dom tailwindcss
```

Run the development server:
```bash
  npm start
```



## 🎯 Features in Action
Home Page :
Displays a list of recipes with a search bar.

Recipe Detail View:
Shows title, ingredients, and more 
        with edit/delete options.

Recipe Form:
Add or edit recipes.

---------------------
## Deployment

Frontend: Deployed on Netlify.

Backend: Hosted on Render.
