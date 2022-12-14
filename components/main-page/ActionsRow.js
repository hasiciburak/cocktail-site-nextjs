import React, { useEffect } from "react";
import StyledButton from "../styled/Button.styled";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import axios from "axios";
const ActionsRow = () => {
  const getRandomCoktail = () => {
    console.log("Getting a random cocktail...");
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col justify-center align-middle pt-5">
      <div className="flex flex-row  justify-center align-middle">
        <div className="w-4/6">
          <input
            type="search"
            className="w-full rounded border-gray-200  border-2 py-2 px-2"
            placeholder="Search for the cocktails, ingredients..."
          />
        </div>
        <div className="w-2/6 ">
          <StyledButton>
            <MagnifyingGlassIcon className="h-6 w-6 text-inherit" />
            Search for Cocktails
          </StyledButton>
        </div>
      </div>
      <div className="text-center">
        <p className="underline mt-1 text-sm cursor-pointer text-gray-400 hover:text-gray-600">
          Feeling Lucky Today...
        </p>
      </div>
    </div>
  );
};

export default ActionsRow;
