// Import necessary libraries and components
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//--------------------------------------------------------
import Header from "./components/Main/Header.jsx";
import Footer from "./components/Main/Footer.jsx";
import ScrollToTop from "./components/Utils/ScrollToTop.jsx";
import NotFound from "./components/Utils/NotFound.jsx";
import PrivateRoute from "./components/Utils/PrivateRoute.jsx";
// import ContextMenu from "./components/others/ContextMenu.jsx";
//--------------------------------------------------------
import useTheme from "./hooks/theme.jsx";
// import useDisableRightClick from "./hooks/DevTool.jsx";
//--------------------------------------------------------
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
//--------------------------------------------------------

const App = () => {
  useTheme();
  // useDisableRightClick()
  // <ContextMenu/>
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected route for Dashboard, only accessible if user is authenticated */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Login page for admin */}
        <Route path="/login" element={<Login />} />

        {/* Fallback route for unmatched paths (404 page) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
};

export default App;
