import Services from "./ServicesCard";
import ServicesData from "../../data/others/services";
import { Link } from "react-router-dom";

const HowICanHelp = () => {
  return (
    <>
      <div className="mx-auto text-center mt-35">
        <h2 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4 animate-text">
          Ways I would help
        </h2>
        <p className="text-lg text-black dark:text-gray-400 mb-6 px-2 md:px-0 animate-text">
          From code to design, I offer end-to-end solutions that elevate your
          digital presence and drive results.
        </p>

        <Services services={ServicesData} />

        {/* Call to Action */}
        <div className="mt-12">
          <Link
            to="/contact"
            className="w-full border px-6 border-gray-500 text-black dark:text-white font-semibold py-3 hover:bg-emerald-400 hover:text-white dark:hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </>
  );
};

export default HowICanHelp;
