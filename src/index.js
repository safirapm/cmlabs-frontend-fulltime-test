/* Component */
import WebNavbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Register from "./pages/Register/Register";

/* Pages */
import IngredientsList from "./pages/Ingredients/IngredientsList";

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
        <Footer />
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
