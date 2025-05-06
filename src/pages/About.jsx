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
        className="relative container mx-auto pt-20 pb-10 md:pt-22 px-4 animate-fade-in h-auto max-w-[1000px] border-l-2 border-r-2  border-dashed border-gray-500 dark:border-gray-700"
      >
        <Heading name="&lt; About Me. /&gt;"tagline={<> Unveiling the <br /> Layers of My Story  </>}/>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-16">
          {/* Left: Image of the person */}
          <div className="max-w-[200px] w-full mx-auto">
            <img
              src="/images/freepik__the-style-is-candid-image-photography-with-natural__62603.png"
              alt="About me illustration"
              className="transform transition-all duration-300 hover:rotate-6 hover:scale-105 shadow-lg "
              loading="lazy"
            />
          </div>

          {/* Right: Text content including description, stats, and contact info */}
          <div className="text-lg lg:w-2/3 animate-text text-black dark:text-gray-300">
            {/* Personal introduction */}
            <p className="mb-6">
              I've grown from simply enjoying problem-solving to dedicating
              myself to blending design with function—crafting interfaces that
              are both beautiful and intuitive. Every project is a canvas to
              bring visions to life with precision, care, and purpose.
            </p>

            {/* Stats Section */}
            <div className="flex gap-8 flex-wrap mb-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 dark:text-emerald-400">
                  04+
                </h1>
                <p className="text-xl">Years Experience</p>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 dark:text-emerald-400">
                  20+
                </h1>
                <p className="text-xl">Projects Completed</p>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 dark:text-emerald-400">
                  100+
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
    </>
  );
};

export default About;
