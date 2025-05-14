import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-portfolio-react.onrender.com",
});

export const login = async (email, password) => {
  try {
      const start = Date.now();
    const response = await api.post("/login", { email, password },  { timeout: 5000 });
    const token = response.data.token;
     console.log("Form submitted in", Date.now() - start, "ms");
    return token;
  } catch (error) {
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Login failed. Please try again later.");
  }
};
