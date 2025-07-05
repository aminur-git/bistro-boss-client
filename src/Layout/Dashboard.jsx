import { Outlet } from "react-router";

import DashboardNavLink from "../Pages/Shared/Dashboard_Shared_Components/Dashboard_NavLinks/DashboardNavLink";
import UserNav from "../Pages/Shared/Dashboard_Shared_Components/UserNav/UserNav";
import AdminNav from "../Pages/Shared/Dashboard_Shared_Components/AdminNav/AdminNav";
import { Bounce, ToastContainer } from "react-toastify";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="md:flex ">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="w-64 min-h-screen bg-[#D1A054] px-6 pt-10">
        <span className=" flex flex-col text-black cinzel py-2 ">
          <p className="text-xl sm:text-2xl font-black tracking-wide ">
            BISTRO BOSS
          </p>
          <p className="text-base sm:text-xl font-bold tracking-widest uppercase">
            Restaurant
          </p>
        </span>

        {/* From shared */}
        {isAdmin ? <AdminNav></AdminNav> : <UserNav></UserNav>}
        <div className="py-10">
          <hr className="border-gray-300  " />
        </div>
        <DashboardNavLink></DashboardNavLink>
      </div>
      <div className="flex-1 pt-10 bg-[#f6f6f6] p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
