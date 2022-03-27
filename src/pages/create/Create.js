import React, { useState, useRef, useEffect } from "react";
import "../../scss/Create.css";
import { useFetch } from "../../hook/useFetch";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredients, setNewIngredients] = useState;
  const [ingredients, setIngredients] = useState([]);
  const ingredientsInput = useRef(null);
  const history = useHistory();

  const { postData, data, error } = useFetch(
    // "http://localhost:3000/recipes",
    // "POST"
    "https://alvs-recipe-maker.herokuapp.com/recipes",
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
      <form onSubmit={handleSubmit}>
        <h2>Add New Recipe</h2>
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
          <span>Method: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <textarea
            onChange={e => setMethod(e.target.value)}
            value={method}
            required
          ></textarea>
        </label>
        <label>
          <span>Ingredients:</span>
          <input
            type="text"
            onChange={e => setNewIngredients(e.target.value)}
            value={newIngredients}
            ref={ingredientsInput}
          />
          <button className="btn add" onClick={handleAdd}>
            +
          </button>
        </label>
        <p className="current-ingredients">
          Current Ingredients:
          <span>
            {ingredients.map(ingredients => (
              <li key={ingredients}>{ingredients},</li>
            ))}
          </span>
        </p>

        <label>
          <span>Minutes to make:</span>
          <input
            type="number"
            onChange={e => setCookingTime(e.target.value)}
            value={cookingTime}
            required
            className="input-mins"
          />
        </label>
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
