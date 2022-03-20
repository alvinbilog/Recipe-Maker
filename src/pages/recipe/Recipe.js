import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";
import "../../scss/Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { error, isPending, data: recipe } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && (
        <>
          <h2>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map(ing => (
              <li>{ing}</li>
            ))}
          </ul>
          <p>{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
