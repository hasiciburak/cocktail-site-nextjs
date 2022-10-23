import React from "react";
import StyledButton from "../styled/Button.styled";

const ActionsRow = () => {
  return (
    <div className="w-screen flex flex-col justify-center pt-5">
      <div className="text-center">
        <input
          type="text"
          className="w-1/2 rounded border-gray-200 text-center border-2 py-2 px-2 placeholder:text-center"
          placeholder="Search for the coctails, ingredients"
        />
      </div>
      <div className="text-center">
        <StyledButton>Show Me Good Stuff</StyledButton>
        <p className="underline mt-1 text-sm cursor-pointer text-gray-400 hover:text-gray-600">
          Feeling Lucky Today...
        </p>
      </div>
    </div>
  );
};

export default ActionsRow;
