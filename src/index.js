/* Component */
import WebNavbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

/* Pages */
import IngredientsList from "./pages/IngredientsList/IngredientsList";
import IngredientsFilter from "./pages/IngredientsFilter/IngredientsFilter";
import MealDetails from "./pages/MealDetails/MealDetails";

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
      {
        path: "/ingredients-detail/:i",
        element: <IngredientsFilter />,
      },
      {
        path: "/meal-details/:idMeal",
        element: <MealDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
