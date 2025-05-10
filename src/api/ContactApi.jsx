import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-portfolio-react.onrender.com",
});
const token = localStorage.getItem("token");

export const contactForm = async (formData) => {
  try {
    const start = Date.now();
    const res = await api.post("/submit", formData,  { timeout: 5000 });
     console.log("Form submitted in", Date.now() - start, "ms");
    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    console.error("Error submitting the form:", error);
    throw error;
  }
};

export const fetchMessages = async () => {
  try {
    if (!token) {
      console.error("No token found");
      return null;
    }
    const res = await api.get("/messages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) return res.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

export const deleteMessage = async (id) => {
  if (!token) {
    console.error("No token found");
    return null;
  }

  try {
    const response = await api.delete(`/messages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Delete failed:", error);
    throw error;
  }
};
