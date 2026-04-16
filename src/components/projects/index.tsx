import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

// IMAGES
import MediTour from "../../assets/Project/Meditour.png";
import Grazle from "../../assets/Project/Rectangle41427.png";
import Alhai from "../../assets/Project/Alhai.png";
import AIHiring from "../../assets/Project/AI-Hiring.png";
import Pocho from "../../assets/Project/PochoChatBot.png";
import BerryBoost from "../../assets/Project/berryboost.png";

export default function Project() {
  const filters = [
    { name: "All", color: "#BFF747" },
    { name: "AI Projects", color: "#F76747" },
    { name: "E-Commerce", color: "#474AF7" },
    { name: "Saas", color: "#B147F7" },
    { name: "Others", color: "#F747CB" },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      type: "Others",
      title: "MediTour",
      category: "Medical Tourism Platform",
      image: MediTour,
    },
    {
      id: 2,
      type: "E-Commerce",
      title: "Grazle",
      category: "Gulf E-Commerce Platform",
      image: Grazle,
    },
    {
      id: 3,
      type: "Others",
      title: "Al-Hai",
      category: "Real-State Platform",
      image: Alhai,
    },
    {
      id: 4,
      type: "AI Projects",
      title: "Pocho ChatBot",
      category: "For Seamless Chatting",
      image: Pocho,
    },
    {
      id: 5,
      type: "AI Projects",
      title: "AI Hiring & Assessment",
      category: "Complete Hiring Platform",
      image: AIHiring,
    },
    // {
    //   id: 6,
    //   type: "Saas",
    //   title: "BerryBoost",
    //   category: "Sales Navigation Solution",
    //   image: BerryBoost,
    // },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  const activeColor =
    filters.find((f) => f.name === activeFilter)?.color || "#BFF747";

  return (
    <div className="bg-[#0E0E0E]">
      <div className="py-12 md:py-24">
        {/* HEADER */}
        <div className="px-5 xl:px-32 2xl:px-40 md:px-10">
          <div className="flex items-center gap-3">
            <Icon
              icon="mdi:star-four-points"
              className="text-2xl text-[#BFF747]"
            />
            <p className="text-[18px] font-semibold text-white font-bricolage">
              Projects
            </p>
          </div>

          <h2 className="font-bigshoulders text-[40px] md:text-[56px] mt-6 font-bold text-white">
            My Featured <span className="text-[#BFF747]">Portfolio</span>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="mt-12">
          {/* TOP BORDER */}
          <div className="w-full border-t border-[#BFF747]" />

          {/* FILTER ITEMS */}
          <div className="flex flex-wrap justify-center px-5 py-6 gap-x-6 gap-y-4 sm:gap-x-8 md:justify-between xl:px-32">
            {filters.map((f) => {
              const isActive = activeFilter === f.name;

              return (
                <div
                  key={f.name}
                  onClick={() => !isActive && setActiveFilter(f.name)}
                  className={`flex items-center gap-3 group ${
                    isActive ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  {/* FIXED WRAPPER */}
                  <div className="flex items-center justify-center w-8 h-8">
                    {/* INNER CIRCLE */}
                    <div
                      className={`relative flex items-center justify-center 
                          w-3 h-3 rounded-full overflow-hidden
                          transition-all duration-300 ease-out
                          ${!isActive && "group-hover:scale-[2.6]"}`}
                      style={{ backgroundColor: f.color }}
                    >
                      {/* ARROW */}
                      <Icon
                        icon="tdesign:arrow-up"
                        className={`absolute text-black rotate-45 text-xs
                            translate-y-4 opacity-0
                            transition-all duration-300 ease-out
                            ${
                              !isActive &&
                              "group-hover:translate-y-0 group-hover:opacity-100"
                            }`}
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <span className="text-white text-[13px] sm:text-[15px] whitespace-nowrap">
                    {f.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* BOTTOM BORDER */}
          <div className="w-full border-b border-[#BFF747]" />
        </div>

        {/* PROJECT GRID */}
        <div className="px-5 xl:px-32 2xl:px-40 md:px-10">
          <div className="mt-16 ">
            {Array.from({ length: Math.ceil(filteredProjects.length / 2) }).map(
              (_, rowIndex) => {
                const rowItems = filteredProjects.slice(
                  rowIndex * 2,
                  rowIndex * 2 + 2,
                );

                return (
                  <div key={rowIndex} className="relative">
                    <div
                      className="absolute top-0 left-0 w-full h-0"
                      style={{ backgroundColor: activeColor, opacity: 0.2 }}
                    />

                    {/* ROW */}
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                      {rowItems.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 80 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="relative flex justify-center w-full cursor-pointer group"
                        >
                          {/* SAME CARD — NO CHANGE */}
                          <div className="relative flex flex-col items-center justify-start w-full h-auto transition duration-500 md:h-160">
                            <div
                              className="absolute inset-0 transition duration-500 origin-top scale-y-0 md:h-160 group-hover:scale-y-100 md:group-hover:scale-y-95"
                              style={{ backgroundColor: activeColor }}
                            />

                            <div className="relative z-10 text-center">
                              <h3 className="text-white pt-7 group-hover:text-black text-[32px] md:text-[40px] font-bold font-bigshoulders">
                                {project.title}
                              </h3>

                              <p className="text-white group-hover:text-black text-[18px] md:text-[22px] mt-2 font-bigshoulders">
                                {project.category}
                              </p>

                              <div className="flex justify-center mt-10">
                                <div className="w-65 h-70 md:w-82.5 md:h-90 overflow-hidden flex items-center justify-center transition duration-500 group-hover:scale-110">
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-contain w-full h-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
