import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // CSS styles
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JS functionality

import { HomePage } from "./HomePage";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProductsNewPage } from "./ProductsNewPage";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { ProductsShowPage } from "./ProductsShowPage";
import { ProductsEditPage } from "./ProductsEditPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/products",
        element: <ProductsIndexPage />,
        loader: () => axios.get("/products.json").then((response) => response.data),
      },
      {
        path: "/products/new",
        element: <ProductsNewPage />,
      },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) => axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/products/:id/edit",
        element: <ProductsEditPage />,
        loader: ({ params }) => axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
