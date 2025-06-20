const Skills = ({skillsData}) => {
  return (
    <section
        className="relative container mx-auto pt-20 md:pt-22 px-4 animate-fade-in h-auto max-w-[1200px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700">
        <div className="container mx-auto text-center pb-20">
          {/* Skills Header */}
          <h1 className="text-4xl lg:text-6xl text-black dark:text-white mb-8  animate-text font-semibold">
            Navigating to the <br className="hidden lg:block" />
            landscape of my abilities.
          </h1>

          {/* Skills Grid: Looping through the skillsData array */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 px-4 text-emerald-400">
            {skillsData.map((skill, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-white/10 backdrop-blur-md  p-3 sm:p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 shadow-md dark:shadow-none"
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3"
                />
                <p className=" dark:text-emerald-400 text-sm sm:text-base text-emerald-600 font-bold">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skills