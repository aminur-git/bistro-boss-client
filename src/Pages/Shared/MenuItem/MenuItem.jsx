import React from "react";

const MenuItem = ({ item }) => {
  const {  name, recipe, image,  price } = item;

  return (
    <div className="flex gap-8 px-2">
      <div className="flex items-center">
        <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-28 w-28 bg-cover bg-center rounded-r-full rounded-b-full shadow-xl border"
      ></div>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between gap-4 pb-4">
          <h1 className="uppercase cinzel text-xl">{name} </h1>
          <p className="text-[#BB8506]">{price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
