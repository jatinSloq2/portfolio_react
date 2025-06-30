import { useEffect } from "react";

const useTheme = () => {
 useEffect(() => {
     const storedTheme = localStorage.getItem("theme");
     const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
     const applyTheme = () => {
       if (storedTheme === "dark" || (!storedTheme && prefersDarkScheme.matches)) {
         document.documentElement.classList.add("dark");
       } else {
         document.documentElement.classList.remove("dark");
       }
     };
     applyTheme();
     const handleChange = (e) => {
       if (!storedTheme) {
         document.documentElement.classList.toggle("dark", e.matches);
       }
     };
   
     prefersDarkScheme.addEventListener("change", handleChange);
     return () => prefersDarkScheme.removeEventListener("change", handleChange);
     }, []);
  };

export default useTheme;
