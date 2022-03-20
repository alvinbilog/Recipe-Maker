import React from "react";
import { Link } from "react-router-dom";
const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }
  return (
    <div>
      {recipes.map(recipe => (
        <div className="card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} To make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
