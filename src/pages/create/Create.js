import React, { useState, useRef, useEffect } from "react";
import "../../scss/Create.css";
import { useFetch } from "../../hook/useFetch";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientsInput = useRef(null);
  const history = useHistory();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const handleSubmit = e => {
    e.preventDefault();
    console.log(title, cookingTime, method, ingredients);
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
  };
  const handleAdd = e => {
    e.preventDefault();
    const ing = newIngredients.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing]);
    }
    setNewIngredients("");
    ingredientsInput.current.focus();
  };
  //redirect user when get data response
  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data]);
  return (
    <div className="Create">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={e => setMethod(e.target.value)}
            value={method}
            required
          ></textarea>
        </label>
        <label>
          <span>Recipe Ingredients:</span>
          <input
            type="text"
            onChange={e => setNewIngredients(e.target.value)}
            value={newIngredients}
            ref={ingredientsInput}
          />
          <button className="btn" onClick={handleAdd}>
            add
          </button>
        </label>
        <p>
          Current Ingredients:
          {ingredients.map(ingredients => (
            <li key={ingredients}>{ingredients}</li>
          ))}
        </p>

        <label>
          <span>Cooking Time (Minutes):</span>
          <input
            type="number"
            onChange={e => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Create;
