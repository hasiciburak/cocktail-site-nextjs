import React from "react";
import Image from "next/image";
import cocktailImg from "/assets/img/welcome-page-bg.jpg";
const CocktailCard = () => {
  return (
    <div className="w-1/3 p-3 border-black border rounded mt-2">
      <Image className="rounded" src={cocktailImg} alt="Coctail Image" />
      <h2 className="text-xl font-bold">Mojito</h2>
      <p className="text-xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.  Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <button className="text-xs font-semibold">Show Details</button>
    </div>
  );
};

export default CocktailCard;
