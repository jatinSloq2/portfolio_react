import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white text-black dark:bg-zinc-950 dark:text-white  border-dashed w-full border-t-2 border-gray-500">
      <div className=" mx-auto relative px-4 max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-l-2 border-r-2 md:text-left py-6 border-dashed border-gray-500">

        {/* Section 1: Logo and Copyright */}
        <div className='mb-10'>
          <h2 className="text-2xl font-bold mb-2 font-display">&lt;Jatin./&gt;</h2>
          <p> I've grown from simply enjoying problem-solving to dedicating myself to blending design with
            function—crafting interfaces that are both beautiful and intuitive.</p>
        </div>


        {/* Section 2: Navigation Links */}
        <div className='mb-10'>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <nav className="flex flex-col items-center md:items-start gap-2 text-black  dark:text-gray-200">
            
            <Link to="/" className="hover:bg-emerald-400 hover:text-black w-fit px-2 transition">Home</Link>
            <Link to="/about" className="hover:bg-emerald-400 hover:text-black w-fit px-2 transition">About</Link>
            <Link to="/services" className="hover:bg-emerald-400 hover:text-black w-fit px-2 transition">Services</Link>
            <Link to="/projects" className="hover:bg-emerald-400 hover:text-black w-fit px-2 transition">Projects</Link>
            <Link to="/contact" className="hover:bg-emerald-400 hover:text-black w-fit px-2 transition">Contact</Link>
            <Link to="/blog" className="hover:bg-emerald-400 hover:text-black w-fit px-2 transition">Blogs</Link>
          </nav>
        </div>

        {/* Section 3: Social Media */}
        <div className='mb-10'>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-4 px-2 py-1 sm:px-4 sm:py-2 bg-emerald-600 text-white text-2xl shadow-md absolute bottom-2 right-2 md:right-10 hover:bg-emerald-700 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>

        <p className="text-sm mt-2 font-bold">&copy; {new Date().getFullYear()} Jatin's Portfolio. All rights reserved.</p>


      </div>

    </footer>

  )
}

export default Footer
