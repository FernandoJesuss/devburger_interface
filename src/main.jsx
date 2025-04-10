import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { router } from "./routes";

import GlobalStyles from "./styles/globalStyles";
import { RouterProvider } from "react-router-dom";
import AppProvider from "./hooks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
   <AppProvider>
    < RouterProvider router={router} />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
    </AppProvider>
  </StrictMode>
);
