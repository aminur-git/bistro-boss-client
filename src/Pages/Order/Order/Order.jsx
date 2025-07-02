import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UseMenu from "../../../Hooks/UseMenu";
import UseCard from "../../../Hooks/UseCard";
import { useParams } from "react-router";

const Order = () => {
  const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu, loading] = UseMenu();
 

  const dessert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  const drinks = menu.filter((item) => item.category == "drinks");

  //   if(loading){
  //     return <div className="h-screen flex justify-center items-center"><span className="loading loading-bars loading-xl"></span></div>
  //   }

  return (
    <div className="pb-10">
      <Helmet>
        <title>Order - Bistro Boss</title>
      </Helmet>
      <Cover
        url={bg}
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      ></Cover>

      <div className="max-w-7xl mx-auto mt-20 ">
        <Tabs
          className={"space-y-20"}
          defaultIndex={category? tabIndex : 0}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList
            className={
              " flex gap-2 md:gap-6  text-xs sm:flex-row md:text-xl justify-center items-center"
            }
          >
            <Tab className={"cursor-pointer p-2"}>SALADS</Tab>
            <Tab className={"cursor-pointer p-2"}>PIZZAS</Tab>
            <Tab className={"cursor-pointer p-2"}>SOUPS</Tab>
            <Tab className={"cursor-pointer p-2"}>DESSERTS</Tab>
            <Tab className={"cursor-pointer p-2"}>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <UseCard items={salad}></UseCard>
          </TabPanel>
          <TabPanel>
            <UseCard items={pizza}></UseCard>
          </TabPanel>
          <TabPanel>
            <UseCard items={soup}></UseCard>
          </TabPanel>
          <TabPanel>
            <UseCard items={dessert}></UseCard>
          </TabPanel>
          <TabPanel>
            <UseCard items={drinks}></UseCard>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
