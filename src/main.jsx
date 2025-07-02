import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";

import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <HelmetProvider>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </HelmetProvider>
</StrictMode>
);
