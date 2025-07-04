import React from "react";
import { NavLink, Outlet } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdContacts, MdMenu, MdReviews } from "react-icons/md";
import { FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { BiShoppingBag, BiSolidShoppingBag } from "react-icons/bi";
const Dashboard = () => {
  return (
    <div className="md:flex ">
      <div className="w-64 min-h-screen bg-[#D1A054] px-6 pt-10">
        <span className=" flex flex-col text-black cinzel py-2 ">
          <p className="text-xl sm:text-2xl font-black tracking-wide ">
            BISTRO BOSS
          </p>
          <p className="text-base sm:text-xl font-bold tracking-widest uppercase">
            Restaurant
          </p>
        </span>
        <ul className=" space-y-4 pt-10 ">
          <li>
            {" "}
            <NavLink
              id="dashboard"
              className={"uppercase cinzel flex items-center gap-2"}
              to={"/"}
            >
              {" "}
              <IoMdHome />
              User Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              id="dashboard"
              className={"uppercase cinzel flex items-center gap-2"}
              to={"/dashboard/reservation"}
            >
              {" "}
              <FaCalendarAlt />
              reservation
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              id="dashboard"
              className={"uppercase cinzel flex items-center gap-2"}
              to={"/dashboard/payment-history"}
            >
              {" "}
              <FaCreditCard />
              payment history
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              id="dashboard"
              className={"uppercase cinzel flex items-center gap-2"}
              to={"/dashboard/add-review"}
            >
              {" "}
              <MdReviews />
              add review
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              id="dashboard"
              className={"uppercase cinzel flex items-center gap-2"}
              to={"/dashboard/cart"}
            >
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>

          <div className="py-6">
            <hr className="border-gray-300  " />
          </div>
          <li>
            {" "}
            <NavLink
              id="dashboard"
              className={"uppercase cinzel flex items-center gap-2"}
              to={"/"}
            >
              {" "}
              <IoIosHome />
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              id="dashboard"
              className={"uppercase cinzel flex items-center gap-2"}
              to={"/menu"}
            >
              {" "}
              <MdMenu /> menu
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              id="dashboard"
              className={"uppercase cinzel flex items-center  gap-2"}
              to={"/order"}
            >
              {" "}
              <BiSolidShoppingBag /> shop
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              id="dashboard"
              className={"uppercase cinzel flex items-center  gap-2"}
              to={"/"}
            >
              {" "}
              <MdContacts/> contacts
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 pt-10 bg-[#f6f6f6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
