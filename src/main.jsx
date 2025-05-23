import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar.jsx";

import App from "./App.jsx";
import Blog from "./pages/Blog";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer.jsx";
import Login_page from "./pages/Login_page.jsx";
import Sign_Up_Page from "./pages/Sign_Up_Page.jsx";
import OtpVerification from "./pages/OtpVerification.jsx";
import Admin from "./pages/dashboard/admin_dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
        <Footer />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Navbar />
        <Blog />
        <Footer />
      </>
    ),
  },
  {
    path: "/category",
    element: (
      <>
        <Navbar />
        <Category />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login_page />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Sign_Up_Page />
      </>
    ),
  },
  {
    path: "/verify-otp",
    element: (
      <>
        <OtpVerification />
      </>
    ),
  },
  {
    path: "/dashboard/admin",
    element: (
      <>
        <Admin />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
