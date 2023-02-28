/* Component */
import WebNavbar from "./components/Navbar/Navbar";

/* Pages */
import IngredientsList from "./pages/IngredientsList/IngredientsList";

/* Library */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <WebNavbar />
        <Outlet />
      </>
    ),
    errorElement: "Page Not Found",
    children: [
      {
        path: "/",
        element: <IngredientsList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
