import React, { useEffect, useState } from "react";
import { fetchComments as fetchCommentsApi, submitComment } from "../../api/CommentApi";

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [text, setText] = useState("");

  // Fetch comments on load
  useEffect(() => {
    fetchComments(); // Use fetchComments here
  }, [blogId]);

  const fetchComments = async () => {
    try {
      const fetchedComments = await fetchCommentsApi(blogId); // Fetch comments from the API
      setComments(fetchedComments);
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !text.trim()) {
      setErrorMessage("Please fill in both name and comment.");
      return;
    }
    setIsSubmitting(true);
    try {
      await submitComment(blogId, username, text);
      setErrorMessage("");
      setUsername("");
      setText("");
      fetchComments(); // Fetch the comments again after submitting a new one
    } catch (err) {
      console.error("Error posting comment:", err);
      setErrorMessage("Failed to post comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    if (username || text) { 
      fetchComments(); 
    }
  }, [username, text]); 

  return (
    <section className="relative container mx-auto pt-20 pb-10 md:pt-22 px-4 animate-fade-in h-auto max-w-[1000px]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-emerald-600 dark:text-gray-400 text-2xl font-bold animate-text mb-2">
            &lt; Comment Here./&gt; {/* Section title */}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <div>
            <h2 className="text-4xl font-semibold mb-6 animate-text text-black dark:text-white">
              Add Your thoughts on this blog
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name*"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <textarea
                placeholder="Write a comment..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-[200px] px-4 py-3 bg-gray-100 dark:bg-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              ></textarea>
              {errorMessage && (
                <p className="text-red-500 font-medium mb-4">{errorMessage}</p>
              )}
              <button
                type="submit"
                className="w-full border border-gray-500 text-black dark:text-white font-semibold py-3 hover:bg-emerald-400 hover:text-white dark:hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting your comment" : "Post Comment"}
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl mb-6 animate-text font-semibold text-black dark:text-white">
              See the comments they praise me to do more
            </h2>
            <div className="mt-6 overflow-y-scroll overflow-x- max-h-[350px] custom-scrollbar">
              {comments.length === 0 ? (
                <p>No comments yet.</p>
              ) : (
                comments.map((comment) => (
                  <div key={comment._id} className="py-2">
                    <p className="font-semibold">{comment.username}</p>
                    <p className="break-words whitespace-pre-wrap pe-3">
                      {comment.text}
                    </p>
                    <small className="text-gray-500">
                      {new Date(comment.createdAt).toLocaleString()}
                    </small>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
