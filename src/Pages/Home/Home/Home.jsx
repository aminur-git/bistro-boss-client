import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import OfferedByChef from "../OfferedByChef/OfferedByChef";
import PopularMenu from "../PopularMenu/PopularMenu";
import SecondBanner from "../SecondBanner/SecondBanner";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
import UseMenu from "../../../Hooks/UseMenu";

const Home = () => {

  const [menu, loading] = UseMenu()

  const popularItem = menu.filter(item => item.category == 'popular' )
  const offeredItem = menu.filter(item => item.category == 'offered' )


  return (
    <div className="space-y-20 md:space-y-40 ">
      <Helmet>
              <title>Home - Bistro Boss</title>
            </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto space-y-20 md:space-y-40">
        <Category></Category>
        <SecondBanner></SecondBanner>
        <PopularMenu popularItem={popularItem}></PopularMenu>
        <section className="h-[250px] bg-black text-white text-2xl lg:text-6xl flex items-center justify-center">
          <h1>Call Us: +88 0192345678910</h1>
        </section>
        <OfferedByChef offeredItem={offeredItem}></OfferedByChef>
      </div>
      <Featured></Featured>
      <div className="max-w-screen-xl mx-auto space-y-20 md:space-y-40">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
