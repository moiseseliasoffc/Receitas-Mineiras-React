import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { routes } from "./router";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
