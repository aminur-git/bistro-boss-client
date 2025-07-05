import axios from "axios";
import React from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { logOut } = UseAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    function (config) {
      console.log("stopped by axios interceptor");
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  // axios - response
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("status error from interceptor", status);

      if (status === 401 || status === 403) {
        await logOut()
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
