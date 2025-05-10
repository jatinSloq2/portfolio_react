import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-portfolio-react.onrender.com",
});

export const fetchComments = async (blogId) => {
  try {
    const response = await api.get(`/comments/${blogId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const submitComment = async (blogId, username, text) => {
  try {
    await api.post(`/comments/${blogId}`, {
      username,
      text,
    });
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
};
