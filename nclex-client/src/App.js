import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/Error";
import NcllexGPT from "./pages/NcllexGPT/NcllexGPT";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import Home from "./components/home/Home";

import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import "./components/web-feat/webApp.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/web-footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",

    errorElement: <ErrorPage />,
    children: [
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <CourseHome /> },
      { path: "team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      // { path: "about", element: <About /> },
      // { path: "about", element: <About /> },
    ],
  },
  { index: true, element: <NcllexGPT /> },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <RouterProvider router={router}>
      <Header />
      {/* Your other components go here */}
      <Footer />
    </RouterProvider>
  );
}

export default App;
