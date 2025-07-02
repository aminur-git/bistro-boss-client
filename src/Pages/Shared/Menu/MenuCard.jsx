import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { Link } from "react-router";

const MenuCard = ({ items, title }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {items?.map((item) => (
            <MenuItem item={item} key={item._id}></MenuItem>
          ))}
        </div>
        <Link to={title ? `/order/${title}` : '/order/salads'} className="mt-6 bg-transparent  btn border-0  shadow-none text-[#1F2937] border-b-2 border-[#1F2937]   hover:bg-[#1F2937] hover:text-white font-bold uppercase rounded-md  h-14 hover:cursor-pointer ">
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </div>
  );
};

export default MenuCard;
