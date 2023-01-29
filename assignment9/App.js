import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerEffect from "./components/ShimmerEffect";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerEffect />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
