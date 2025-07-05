import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiNotebookFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
const  AdminNav = () => {
    return (
        <div>
            <ul className=" space-y-8 pt-10 ">
        <li>
          {" "}
          <NavLink
            id="dashboard"
            className={"uppercase cinzel flex items-center gap-2 "}
            to={"/dashboard/profile"}
          >
            {" "}
            <IoMdHome className="text-2xl" />
            <h1>admin Home</h1>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            id="dashboard"
            className={"uppercase cinzel flex items-center gap-2"}
            to={"/dashboard/add-item"}
          >
            {" "}
            <ImSpoonKnife className="text-2xl" />
            <h1>add items</h1>
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
            <TfiMenuAlt className="text-2xl" />
            <h1>manage items</h1>
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
            <PiNotebookFill className="text-2xl" />
            <h1>Manage bookings</h1>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            id="dashboard"
            className={"uppercase cinzel flex items-center gap-2"}
            to={"/dashboard/all-users"}
          >
            <FaUsers className="text-2xl" /> <h1>all users</h1>
          </NavLink>
        </li>
      </ul>
        </div>
    );
};

export default AdminNav;