import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import bg from "../../assets/others/authentication.png";
import img1 from "../../assets/others/authentication2.png";

const Login = () => {
  const captchaRef = useRef(null);
  const { signIn, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  const [captchaValid, setCaptchaValid] = useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    if (!captchaValid) {
      toast.warn("Please validate the CAPTCHA first.");
      return;
    }

    signIn(email, pass)
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleCaptchaChange = () => {
    const value = captchaRef.current.value;
    setCaptchaValid(validateCaptcha(value));
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(() => {
        toast.success("Google Sign-In successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Helmet>
        <title>Log In - Bistro Boss</title>
      </Helmet>

      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex flex-col md:flex-row justify-center gap-5 items-center px-5 py-15 w-full md:max-w-4/5 mx-auto md:shadow-2xl"
      >
        <div className="flex-1 flex justify-end">
          <img src={img1} alt="Login Illustration" />
        </div>

        <div className="w-full flex-1">
          <h1 className="text-center text-3xl font-bold text-[#151515]">Login</h1>

          <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto mt-5">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Email</legend>
              <input
                className="input validator w-full border-none"
                type="email"
                name="email"
                placeholder="mail@site.com"
                required
              />
            </fieldset>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                name="pass"
                className="input w-full border-none validator"
                placeholder="***********"
                required
                minLength={8}
              />
            </fieldset>

            <div className="w-full">
              <LoadCanvasTemplate />
              <input
                type="text"
                name="captcha"
                className="input w-full border-none mt-4"
                placeholder="Enter CAPTCHA"
                required
                ref={captchaRef}
              />
              <button
                type="button"
                onClick={handleCaptchaChange}
                className="btn btn-xs btn-outline w-full mt-3"
              >
                Validate CAPTCHA
              </button>
            </div>

            <button
              type="submit"
              disabled={!captchaValid}
              className={`btn w-full text-white mt-5 ${
                captchaValid ? "bg-[#D1A054B3]" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              LOGIN
            </button>
          </form>

          <div className="text-center pt-10">
            <p className="text-[#D1A054]">
              New here?{" "}
              <Link to="/sign-up" className="font-semibold">
                Create a New Account
              </Link>
            </p>
          </div>

          <div className="text-center pt-5">
            <h1 className="text-[#444444] font-medium">Or sign in with</h1>
            <div className="flex justify-center items-center gap-4 py-4">
              <button className="btn btn-circle btn-outline">
                <FaFacebookF className="text-2xl" />
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-circle btn-outline"
              >
                <FaGoogle className="text-2xl" />
              </button>
              <button className="btn btn-circle btn-outline">
                <FaGithub className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
