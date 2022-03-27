import React from "react";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hook/useFetch";
import { Link } from "react-router-dom";
import "../../scss/Home.css";

const Home = () => {
  const { data, isPending, error } = useFetch(
    "https://alvs-recipe-maker.herokuapp.com/"
  );
  // const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="Home">
      <div className="greetings">
        <h1>Best Food For Your Taste</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit
          dignissimos placeat iure perspiciatis eveniet tempore odio quis
          possimus, aspernatur, inventore velit. Facere voluptatum minus sequi
          error placeat hic eum.
        </p>

        <Link to="/create" className="links">
          <button>
            <span>Create</span>
          </button>
        </Link>
        {/* <button>
          <span>Recipes</span>
        </button> */}
      </div>
      <div className="recipe-container">
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
        {data && <RecipeList recipes={data} />}
      </div>
      {/* <div className="show-recipe">
        
      </div> */}
    </div>
  );
};

export default Home;
