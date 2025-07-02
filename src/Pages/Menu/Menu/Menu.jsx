import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";
import img from "../../../assets/menu/banner3.jpg";
import img2 from "../../../assets/menu/dessert-bg.jpeg";
import img3 from "../../../assets/menu/pizza-bg.jpg";
import img4 from "../../../assets/menu/salad-bg.jpg";
import img5 from "../../../assets/menu/soup-bg.jpg";
import img6 from "../../../assets/menu/banner3.jpg";

import MenuCard from "../../Shared/Menu/MenuCard";
import UseMenu from "../../../Hooks/UseMenu";
import UseMenuCategory from "../../../Hooks/UseMenuCategory";

const Menu = () => {
  const [menu, loading] = UseMenu();

  const dessert = menu.filter((item) => item.category == "dessert");
  const offeredItems = menu.filter((item) => item.category == "offered");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
   const drinks = menu.filter((item) => item.category == "drinks");

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="pb-10">
      <Helmet>
        <title>Menu - Bistro Boss</title>
      </Helmet>
      <Cover
        url={img}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <div className="mt-20 space-y-40">
        <div className={"max-w-7xl mx-auto"}>
          <SectionTitle
            subHeading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
          ></SectionTitle>
          <MenuCard items={offeredItems}></MenuCard>
        </div>

        <UseMenuCategory
          img={img2}
          title={"desserts"}
          items={dessert}
          description={
            "Indulge in our handcrafted desserts made with love and the freshest ingredients. From rich, velvety cakes to refreshing fruity delights, every bite is a celebration of flavor. Whether you’re craving something creamy, crunchy, or sweetly spiced — we have the perfect ending to your meal."
          }
        ></UseMenuCategory>
        <UseMenuCategory
          img={img3}
          title={"pizzas"}
          items={pizza}
          description={
            "Savor our handcrafted pizzas, made with fresh dough, rich tomato sauce, and a blend of premium cheeses. From classic Margherita to bold and spicy creations, every slice is baked to perfection in our stone ovens. Whether you love it cheesy, meaty, or loaded with veggies — our pizzas deliver a taste that keeps you coming back for more."
          }
        ></UseMenuCategory>
        <UseMenuCategory
          img={img4}
          title={"salads"}
          items={salad}
          description={
            "Enjoy a refreshing burst of flavor with our vibrant salads, made from crisp greens, seasonal vegetables, and delicious dressings. Whether you prefer light and tangy or rich and hearty, our salads are the perfect balance of health and taste — ideal as a starter or a satisfying main course."
          }
        ></UseMenuCategory>
        <UseMenuCategory
          img={img5}
          title={"soups"}
          items={soup}
          description={
            "Warm your soul with our comforting selection of soups, crafted from rich broths, fresh herbs, and wholesome ingredients. From creamy classics to bold, spicy favorites, each bowl is simmered to perfection — the ideal start to any meal or a cozy treat on its own."
          }
        ></UseMenuCategory>
        <UseMenuCategory
          img={img6}
          title={"drinks"}
          items={drinks}
          description={
            "Warm your soul with our comforting selection of soups, crafted from rich broths, fresh herbs, and wholesome ingredients. From creamy classics to bold, spicy favorites, each bowl is simmered to perfection — the ideal start to any meal or a cozy treat on its own."
          }
        ></UseMenuCategory>
      </div>
    </div>
  );
};

export default Menu;
