import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-portfolio-react.onrender.com",
});

export const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    const token = response.data.token;
    return token;
  } catch (error) {
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Login failed. Please try again later.");
  }
};
