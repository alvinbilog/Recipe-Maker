import React from "react";
import { Link } from "react-router-dom";
import "../scss/RecipeList.css";

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }
  return (
    <div className="Recipelist">
      {recipes.map(recipe => (
        <div className="card shadow" key={recipe.id}>
          <div className="text-container">
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} To make.</p>
            <div>
              <p>{recipe.method.substring(0, 100)}...</p>
            </div>
            <Link to={`/recipes/${recipe.id}`} className="links">
              <h4>Cook This</h4>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
