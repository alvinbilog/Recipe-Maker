import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../scss/Searchbar.css";

function Searchbar() {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
  };
  return (
    <div className="Searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          onChange={e => setTerm(e.target.value)}
          required
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default Searchbar;
