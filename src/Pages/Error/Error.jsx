import React from "react";
import bg from "../../assets/404.gif";

const Error = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center h-screen pt-10 text-center ">
        <img src={bg} alt="" />
        <div className="">
          <p className="text-lg text-gray-600  flex flex-col gap-4">
            <span className=" ">🪐 Lost in Space?</span>
            <span>
              Looks like you’ve taken a wrong turn somewhere in the galaxy.
            </span>
            <span>
              This page doesn’t exist — or maybe it got abducted by aliens 👽.{" "}
            </span>
            <span>
              🚀 Don’t panic — just hit the{" "}
              <span className="font-bold">Go Back</span> button and return to
              Earth safely.
            </span>
          </p>
          <button className="btn btn-outline my-10">
            <a href="/">Go Back</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
