import React from "react";
import CocktailCard from "./CocktailCard";
import Styledh2 from "../styled/Styledh2.styled";
const SearchResults = () => {
  return (
    <div>
      <div>
        <Styledh2>Search Results</Styledh2>
        <p>... cocktails found</p>
      </div>
      <div>
        <CocktailCard />
      </div>
    </div>
  );
};

export default SearchResults;
