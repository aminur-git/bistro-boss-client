import React from "react";
import bannerImage from "../../../assets/home/chef-service.jpg";

const SecondBanner = () => {
  return (
    <div
      className="bg-cover bg-fixed  bg-center md:h-[570px]  flex items-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="md:w-4/6 mx-auto p-10 lg:p-20 space-y-4 bg-[#ffffffc9]  md:bg-white  text-center">
        <h1 className="uppercase cinzel text-2xl">BISTRO BOSS</h1>
        <p className=" text-black text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          fuga, maxime delectus, voluptates minima beatae ex rerum eos iusto est
          accusantium cumque a, doloremque temporibus excepturi ab nulla quae
          nihil!
        </p>
      </div>
    </div>
  );
};

export default SecondBanner;
