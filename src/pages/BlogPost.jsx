import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/others/blogData";
import ReactMarkdown from "react-markdown";
import CommentSection from "../components/Utils/Comment";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) return <div className="p-6">Blog not found</div>;

  return (
    <section className="relative container mx-auto pt-5 pb-20 md:pt-10 px-4 animate-fade-in h-auto max-w-[1200px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700">
      
      {/* Blog Post Image */}
      <img src={post.image} alt={post.title} className="w-auto max-h-140 mx-auto object-cover mb-6" />
      
      {/* Blog Content Section */}
      <div className="prose prose-lg max-w-none">
        
        {/* Display tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-white text-xs font-medium px-2 py-1 "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Render Markdown content with custom styling */}
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-center text-3xl font-bold my-6 text-emerald-600 dark:text-emerald-400" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-center text-2xl font-semibold my-5 text-emerald-600 dark:text-emerald-400" {...props} />
            ),
            hr: ({ node, ...props }) => (
              <hr className="border-dashed my-10 border-emerald-600 dark:border-emerald-400" />
            ),
            p: ({ node, ...props }) => (
              <p className="text-neutral-900 dark:text-gray-300 leading-relaxed my-3" {...props} />
            ),
            img: ({ node, ...props }) => (
              <img className="mx-auto p-5 max-w-[250px] my-4  shadow-md transition-transform transform hover:scale-105 " {...props} />
            ),
            code: ({ node, inline, className, children, ...props }) => {
              return !inline ? (
                <pre className="bg-gray-800 text-white p-5 overflow-x-auto my-4 shadow-lg border-l-4 border-emerald-400 custom-scrollbar">
                  <code>{children}</code>
                </pre>
              ) : (
                <code className="bg-emerald-100 text-emerald-600 px-2 py-1 text-sm font-mono">{children}</code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>

        {/* Author and Date */}
        <h1>
          Author : {post.author} <br />
          Date : {post.date}
        </h1>
      </div>

      <hr className="border-dashed my-10" />

      <CommentSection blogId={post.id} />


      <hr className="border-dashed my-10" />
      {/* Other Blogs Section */}
      <div className="p-6 mt-20">
        <h1 className="text-center text-emerald-600 dark:text-gray-400 text-2xl font-bold animate-text mb-2">
          &lt; My Other Blogs. /&gt;
        </h1>
        
        {/* Horizontally scrollable list of blog cards */}
        <div className="overflow-x-auto custom-scrollbar p-6 flex space-x-6">
          <div className="flex space-x-6">
            {blogPosts.map((otherPost) => (
              <Link
                to={`/blog/${otherPost.id}`}
                key={otherPost.id}
                className="bg-gray-100 dark:bg-white/10 w-72 backdrop-blur-md p-6 transition-transform duration-300 hover:scale-105 shadow-lg"
              >
                <img
                  src={otherPost.image}
                  alt={`Image for ${otherPost.title}`} // Descriptive alt text
                  loading="lazy" // Lazy loading
                  className="w-full h-30 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-md font-semibold text-emerald-600 dark:text-emerald-400">
                    {otherPost.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
