import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";
import RecipeList from "../../components/RecipeList";
import "../../scss/Search.css";
const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;

  const { error, isPending, data } = useFetch(url);

  return (
    <div className="Search">
      <h2 className="page-title">Recipes Including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
