import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router";
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

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { signUpUser, updateUserProfile } = useContext(AuthContext);
  const captchaValue = watch("captcha");
  const [captchaValid, setCaptchaValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = async (data) => {
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=513c386d6822998b3f420f793920561f`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();
      const imageUrl = result?.data?.display_url;

      const { name, email, pass } = data;
      signUpUser(email, pass)
        .then((result) => {
          updateUserProfile(name, imageUrl)
            .then(() => {
              toast.success("Sign Up Successful");
              reset();

              navigate("/"); 
            })
            .catch((err) => {
              console.error("Profile update failed", err);
              toast.error("Profile update failed");
            });
        })
        .catch((err) => {
          console.error("Sign up failed", err);
          toast.error(err.message);
        });
    } catch (err) {
      console.error("Image upload failed", err);
      toast.error("Image upload failed");
    }
  };

  const handleCaptchaChange = () => {
    setCaptchaValid(validateCaptcha(captchaValue));
  };

  return (
    <div
      className="min-h-screen flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Helmet>
        <title>Sign Up - Bistro Boss</title>
      </Helmet>

      <div
        className="flex flex-col md:flex-row-reverse justify-center gap-5 items-center px-5 py-15 w-full md:max-w-4/5 mx-auto md:shadow-2xl"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex-1 flex justify-center items-center">
          <img src={img1} alt="Sign Up Visual" />
        </div>

        <div className="w-full flex-1">
          <h1 className="text-center text-3xl font-bold text-[#151515]">
            Sign Up
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-sm mx-auto mt-5"
          >
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Name</legend>
              <input
                {...register("name", { required: true })}
                className="input validator w-full border-none"
                type="text"
                placeholder="Your Name"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Upload Image</legend>
              <input
                className="input"
                type="file"
                accept="image/*"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="text-red-500">Image is required</p>
              )}
            </fieldset>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Email</legend>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                placeholder="mail@site.com"
                className="input validator w-full border-none bg-white"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </fieldset>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Password</legend>
              <input
                {...register("pass", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                type="password"
                className="input w-full border-none"
                placeholder="********"
              />
              {errors.pass && (
                <p className="text-red-500">{errors.pass.message}</p>
              )}
            </fieldset>

            <div className="w-full">
              <LoadCanvasTemplate />
              <input
                {...register("captcha", { required: true })}
                type="text"
                className="input w-full border-none mt-4"
                placeholder="Type CAPTCHA here"
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
                captchaValid
                  ? "bg-[#D1A054B3]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              SIGN UP
            </button>
          </form>

          <div className="text-center pt-10">
            <p className="text-[#D1A054]">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold">
                Login
              </Link>
            </p>
          </div>

          <div className="text-center pt-5">
            <h1 className="text-[#444444] font-medium">Or sign in with</h1>
            <div className="flex justify-center items-center gap-4 py-4">
              <button className="btn btn-circle btn-outline">
                <FaFacebookF className="text-2xl" />
              </button>
              <button className="btn btn-circle btn-outline">
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

export default SignUp;
