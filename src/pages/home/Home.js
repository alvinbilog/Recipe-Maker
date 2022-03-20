import React from "react";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hook/useFetch";
import "../../scss/Home.css";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {/* {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />} */}
    </div>
  );
};

export default Home;
