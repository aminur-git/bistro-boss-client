import React from "react";
import Cover from "../Pages/Shared/Cover/Cover";
import MenuCard from "../Pages/Shared/Menu/MenuCard";

const UseMenuCategory = ({img, title, description, items}) => {
  return (
    <div className="space-y-20">
      <Cover
        url={img}
        title={title}
        description={description}
      ></Cover>
      <MenuCard items={items} title={title} ></MenuCard>
    </div>
  );
};

export default UseMenuCategory;
