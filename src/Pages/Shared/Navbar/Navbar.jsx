import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../Providers/AuthProvider";
import { CgProfile } from "react-icons/cg";
import cartIcon from "../../../assets/icon/cart.png";
import UseCart from "../../../Hooks/UseCart";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [cart] = UseCart();
  console.log(cart);

  const signOut = ()=>{
    logOut()
    .then(() => {
            toast.warning("Sign-out successful.");
          })
          .catch((error) => {
            toast.error(error.message);
          });
  }

  const links = (
    <>
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink to={"contact"}>CONTACT US</NavLink>
      <NavLink to={"/dashboard/user-home"}>DASHBOARD</NavLink>
      <NavLink to={"menu"}>Our Menu</NavLink>
      <NavLink to={"/order"}>Our Shop</NavLink>
      <NavLink to={"dashboard/cart"} className={"relative"}>
        {" "}
        <img src={cartIcon} className="w-12" alt="" />
        <div className="badge absolute top-8 left-6  bg-red-500 border-none text-white badge-xs ">
          {cart.length}
        </div>{" "}
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="w-full  fixed backdrop-blur-xs  z-20 flex justify-between px-2 md:px-8 items-center bg-[#15151580] shadow-2xl  mx-auto cinzel">
        <div className="flex items-center ">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="text-yellow-300 pr-4 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  backdrop-blur-2xl bg-amber-500   rounded-box top-10 mt-3 w-52 p-2 shadow uppercase space-y-2"
            >
              {links}
            </ul>
          </div>
          <span className=" flex flex-col text-white cinzel py-2 ">
            <p className="text-xl sm:text-2xl font-black ">BISTRO BOSS</p>
            <p className="text-base sm:text-xl font-bold">Restaurant</p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex font-bold text-white">
            <ul className="uppercase space-x-4 flex justify-center items-center">
              {links}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <button
                onClick={signOut}
                className="font-bold text-white uppercase btn bg-transparent"
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Out"
                )}
              </button>
            ) : (
              <Link
                to={"/login"}
                className="font-bold text-white uppercase btn bg-transparent"
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Log In"
                )}
              </Link>
            )}
            <div className="avatar items-center justify-center">
              <div className="w-10 rounded-full ">
                { !user ? (
                  loading ?  <div className="skeleton  w-10 h-10  rounded-full flex items-center justify-center"><span className="loading loading-ring loading-sm"></span></div>: <CgProfile className="text-white text-4xl" />
                ) : (  <Link to={'/dashboard/profile'}><img src={user?.photoURL} alt="user" /></Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
