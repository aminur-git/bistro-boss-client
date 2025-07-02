import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const OfferedByChef = ({ offeredItem }) => {
  return (
    <section>
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {offeredItem.map((item) => (
          <div key={item._id}>
            <div className="card rounded-none bg-base-100 w-80 h-96  mx-auto shadow-sm">
              <figure className=" ">
                <img src={item.image} alt="Shoes" className="" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions">
                  <button className="mt-6 btn border-0  bg-transparent text-[#BB8506] border-b-2 border-[#BB8506] hover:bg-[#BB8506] hover:text-white font-bold rounded-md  w-40 h-14 hover:cursor-pointer ">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferedByChef;
