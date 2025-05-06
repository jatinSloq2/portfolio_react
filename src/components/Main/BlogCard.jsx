import React from 'react'
import { Link } from "react-router-dom"; // For navigation between routes

const BlogCard = ({posts}) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
    {/* Mapping through each blog post */}
    {posts.map((post) => (
      <Link
        to={`/blog/${post.id}`} // Dynamic route to each blog post
        key={post.id}
        className="bg-gray-100 dark:bg-white/10 backdrop-blur-md p-6 transition-transform duration-300 hover:scale-105 shadow-lg"
      >
        {/* Blog image */}
        <img
          src={post.image}
          alt={`Image for ${post.title}`} // Accessibility improvement
          loading="lazy" // Performance improvement by lazy loading images
          className="w-full h-70 object-cover"
        />

        {/* Blog content section */}
        <div className="p-4">
          {/* Blog title */}
          <h2 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
            {post.title}
          </h2>

          {/* Blog summary */}
          <p className="dark:text-gray-100 text-black py-1">
            {post.summary}
          </p>

          {/* Tags list */}
          <div className="flex flex-wrap gap-2 mb-4 mt-4">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-white text-xs font-medium px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read More link */}
          <span
            to={`/blog/${post.id}`}
            className="inline-block text-sm text-white bg-emerald-600 dark:bg-emerald-500 px-4 py-2 mt-3 hover:bg-emerald-700 transition"
            aria-label={`Read more about ${post.title}`} // Screen reader accessibility
          >
            <i className="fas fa-book-open mr-2"></i>Read More
          </span>

          {/* Share button */}
          <button
            onClick={() => {
              // Use Web Share API if available
              if (navigator.share) {
                navigator
                  .share({
                    title: post.title,
                    text: post.summary,
                    url: window.location.href,
                  })
                  .then(() => console.log("Share was successful."))
                  .catch((error) => console.log("Error sharing:", error));
              } else {
                // Fallback sharing method using WhatsApp
                const shareUrl = window.location.href;
                const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
                  post.title + " - " + post.summary + "" + shareUrl
                )}`;

                // Open sharing link in new tab
                window.open(whatsappUrl, "_blank", "width=600,height=400");
              }
            }}
            className="inline-block text-sm text-white bg-black dark:bg-white dark:text-black px-4 py-2 mt-3 ml-3 hover:bg-neutral-800 dark:hover:bg-gray-200 transition"
            aria-label={`Share ${post.title}`} // Accessibility label
          >
            <i className="fas fa-share-alt mr-2"></i>Share
          </button>
        </div>
      </Link>
    ))}
  </div>
  )
}

export default BlogCard