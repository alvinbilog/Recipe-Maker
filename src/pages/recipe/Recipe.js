import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";
import "../../scss/Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { error, isPending, data: recipe } = useFetch(url);

  return (
    <div className="Recipe">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && (
        <div className="recipe-container">
          <div className="title">
            <h2>{recipe.title}</h2>
          </div>

          <div className="container">
            <div className="img-container"></div>
            <div className="text-container">
              <p>Takes {recipe.cookingTime} to cook</p>
              <ul>
                {recipe.ingredients.map(ing => (
                  <li>{ing}</li>
                ))}
              </ul>
              <p className="method">{recipe.method}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
