import blogPosts from "../data/others/blogData"; // Importing blog post data from context
import Heading from "../components/Utils/Heading";
import BlogCard from "../components/Main/BlogCard";

// Blog component definition
export default function Blog() {
  return (
    // Outer section container with padding, border, animation, and responsive styling
    <section className="relative container mx-auto pt-20 pb-10 md:pt-22 px-4 animate-fade-in h-auto max-w-[1200px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700">
      <Heading
        name="&lt; My-Blogs /&gt;"
        tagline={
          <>
            Exploring the <br /> Layers of Technology
          </>
        }
      />
      <BlogCard posts={blogPosts} />
      
    </section>
  );
}
