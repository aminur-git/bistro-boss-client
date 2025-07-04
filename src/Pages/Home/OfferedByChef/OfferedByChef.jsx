import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseCard from "../../../Hooks/UseCard";

const OfferedByChef = ({ offeredItem }) => {
  return (
    <section>
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="">
        <UseCard items={offeredItem}></UseCard>
      </div>
    </section>
  );
};

export default OfferedByChef;
