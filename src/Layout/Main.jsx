import { Outlet, useLocation } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";
import { Bounce, ToastContainer } from "react-toastify";

const Main = () => {
  const location = useLocation();
  const hiddenRoutes = ["/login", "/sign-up"];
  const hidden = hiddenRoutes.includes(location.pathname);

  return (
    <div className="inter">
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
      {hidden || <Navbar></Navbar>}
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
      {hidden || <Footer></Footer>}
    </div>
  );
};

export default Main;
