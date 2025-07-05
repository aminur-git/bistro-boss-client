import { IoIosHome } from "react-icons/io";
import { MdContacts, MdMenu, MdReviews } from "react-icons/md";

import { BiShoppingBag, BiSolidShoppingBag } from "react-icons/bi";
import { NavLink } from "react-router";
const DashboardNavLink = () => {
  return (
    <div>
      
      <ul className="space-y-4">
        <li>
          <NavLink
            id="dashboard"
            className={"uppercase cinzel flex items-center gap-2 btn "}
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
            className={"uppercase cinzel flex items-center gap-2 btn"}
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
            className={"uppercase cinzel flex items-center  gap-2 btn"}
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
            className={"uppercase cinzel flex items-center  gap-2 btn"}
            to={"/"}
          >
            {" "}
            <MdContacts /> contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavLink;
