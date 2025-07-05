import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdContacts, MdMenu, MdReviews } from "react-icons/md";
import { FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { NavLink } from "react-router";
const UserNav = () => {
  return (
    <div>
      <ul className=" space-y-8 pt-10 ">
        <li>
          {" "}
          <NavLink
            id="dashboard"
            className={"uppercase cinzel flex items-center gap-2"}
            to={"/dashboard/profile"}
          >
            {" "}
            <IoMdHome className="text-2xl" />
            <h1>User Home</h1>
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
            <FaCalendarAlt className="text-2xl" />
            <h1>reservation</h1>
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
            <FaCreditCard  className="text-2xl"/>
            <h1>payment history</h1>
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
            <MdReviews className="text-2xl" />
            <h1>add review</h1>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            id="dashboard"
            className={"uppercase cinzel flex items-center gap-2"}
            to={"/dashboard/cart"}
          >
            <FaShoppingCart className="text-2xl" /> My Cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserNav;
