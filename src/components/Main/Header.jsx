import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(null); 
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // This effect runs on mount to set initial dark mode preference
  useEffect(() => {
    const userPref = localStorage.getItem('theme');
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialMode = userPref ? userPref === 'dark' : systemPref;
    setDarkMode(initialMode);
    setMounted(true);
  }, []);

  // This effect handles theme change when darkMode state changes
  useEffect(() => {
    if (darkMode === null) return;

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // This effect checks if the user is logged in by checking the token
  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLoginStatus();
    
    // Listen for changes in localStorage (this will capture changes across tabs)
    window.addEventListener('storage', checkLoginStatus);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    checkLoginStatus(); // Update login state immediately
    navigate('/login');
  };

  if (!mounted) return null;

  const navBase = "px-3 py-1  transition-colors duration-200 font-medium";
  const navActive = "bg-neutral-950 dark:bg-emerald-400 text-white dark:text-black";

  return (
    <nav className="bg-white text-black dark:bg-neutral-950 dark:text-white shadow-emerald-400 dark:shadow-gray-400 border-b-2  border-dashed border-gray-500 w-full">
      <div className="mx-auto flex items-center justify-between px-6 py-3 gap-6 max-w-[1200px] border-dashed border-l-2 border-r-2 border-gray-500">

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60">
            <div className="w-64 h-full bg-white dark:bg-neutral-900 p-6  relative">
              <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-bold dark:text-white font-display"><NavLink to="/">  &lt; Jatin. / &gt;</NavLink></div>
                <button onClick={() => setIsSidebarOpen(false)} aria-label="Close Menu">
                  <i className="fas fa-times text-xl text-black dark:text-white"></i>
                </button>
              </div>
              <div className='bg-white h-[1px] mb-8'></div>
              <nav className="flex flex-col gap-4">
                {['/', '/about', '/services', '/projects', '/contact', '/blog'].map((path, idx) => (
                  <NavLink
                    key={idx}
                    to={path}
                    onClick={() => setIsSidebarOpen(false)}
                    className={({ isActive }) => `${navBase} ${isActive ? navActive : "hover:bg-gray-200 dark:hover:bg-neutral-800"}`}
                  >
                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </NavLink>
                ))}

                {isLoggedIn && (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsSidebarOpen(false);
                    }}
                    className="hover:bg-emerald-400 dark:hover:bg-neutral-800 px-2"
                  >
                    Logout
                  </button>
                )}
              </nav>
            </div>
          </div>
        )}

        {/* Logo */}
        <div className="text-2xl xl:text-3xl font-bold text-center font-display">
          <Link to="/">  &lt; Jatin. / &gt;</Link>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex gap-3">
          {['/', '/about', '/services', '/projects', '/contact', '/blog'].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) => `${navBase} ${isActive ? navActive : "hover:bg-emerald-400 dark:hover:bg-neutral-800"}`}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="hover:bg-emerald-400 dark:hover:bg-neutral-800"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-auto p-2 bg-neutral-950 dark:bg-white"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-white" />}
        </button>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label="Toggle Menu">
            <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
