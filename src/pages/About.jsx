import React from "react";
import skillsData from "../data/others/skills";
import Skills from "../components/Main/SkillsCard";
import Heading from "../components/Utils/Heading";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="relative container mx-auto pt-20 pb-10 md:pt-22 px-4 animate-fade-in h-auto max-w-[1200px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700"
      >
        <Heading
          name="< About Me. />"
          tagline={<> Unveiling the <br /> Layers of My Story </>}
        />

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-16">
          {/* Left: Image of the person */}
          <div className="max-w-[300px] w-full mx-auto">
            <img
              src="images/WhatsApp Image 2025-06-14 at 18.31.40_501ad617.jpg"
              alt="About me illustration"
              className="transform transition-all duration-300 hover:rotate-6 hover:scale-105 shadow-lg "
              loading="lazy"
            />
          </div>

          {/* Right: Text content including description, stats, and contact info */}
          <div className="text-lg lg:w-2/3 animate-text text-black dark:text-gray-300">
            {/* Personal introduction */}
            <p className="mb-6">
             Over time, my passion for problem-solving has evolved into a deep dedication to merging design with function. I've come to see every challenge as an opportunity to create experiences that are not only visually captivating but also highly intuitive. Crafting interfaces that balance beauty with usability has become my mission. Each project I take on feels like a blank canvas, where I meticulously shape ideas into seamless, purposeful designs. With every detail considered and every line of code written, I strive to bring visions to life with precision, care, and an unwavering sense of purpose. My education at Parishkar College of Global Excellence and full-stack developer training from Grass Institute have further solidified my foundation, allowing me to blend design and technology seamlessly.
            </p>

            {/* Stats Section */}
            <div className="flex gap-8 flex-wrap mb-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 dark:text-emerald-400">
                  01+
                </h1>
                <p className="text-xl">Years Experience</p>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 dark:text-emerald-400">
                  10+
                </h1>
                <p className="text-xl">Projects Completed</p>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 dark:text-emerald-400">
                  10+
                </h1>
                <p className="text-xl">Satisfied Clients</p>
              </div>
            </div>

            {/* Divider Line */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-emerald-950 dark:via-emerald-500 to-emerald-950 mb-6" />

            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row gap-x-5">
              <p className="text-base lg:text-md">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Email:
                </span>
                <br />{" "}
                <a
                  href="mailto:jatinsingh098loq2@outlook.com"
                  className="hover:underline"
                >
                  jatinsingh098loq2@outlook.com
                </a>
              </p>
              <p className="text-base lg:text-md">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Phone:
                </span>{" "}
                <br />
                7240440461
              </p>
              <p className="text-base lg:text-md">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Location:
                </span>
                <br />
                Jaipur, Rajasthan, India
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Skills Section */}
      <Skills skillsData={skillsData} />

      {/* <Testimonial/> */}
    </>
  );
};

export default About;
