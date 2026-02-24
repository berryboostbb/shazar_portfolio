import { Icon } from "@iconify/react";
import Project1 from "../../assets/Project/Rectangle4142.png";
import Project2 from "../../assets/Project/Rectangle41427.png";

export default function Project() {
  const projects = [
    {
      id: 1,
      category: "Web / Development",
      title: "BerryBoost",
      image: Project1,
    },
    {
      id: 2,
      category: "Web / Development",
      title: "BerryBoost",
      image: Project2,
    },
    {
      id: 3,
      category: "Web / Development",
      title: "BerryBoost",
      image: Project1,
    },
    {
      id: 4,
      category: "Web / Development",
      title: "BerryBoost",
      image: Project2,
    },
  ];

  return (
    <div className="bg-[#0E0E0E]">
      <div className="px-5 py-10 md:py-25 xl:px-32 2xl:px-40 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              <Icon
                icon="mdi:star-four-points"
                className="text-2xl text-[#BFF747]"
              />
              <p className="text-2xl font-semibold text-white font-bricolage">
                Projects
              </p>
            </div>

            <p className="font-bigshoulders text-[40px] md:text-[56px] mt-6 leading-[110%] font-semibold text-white">
              My Featured <span className="text-[#BFF747]">Portfolio</span>
            </p>
          </div>

          <button className="relative overflow-hidden hidden group md:flex gap-3 justify-center items-center h-14 w-50 font-bricolage border border-[#BFF747] bg-[#BFF747] rounded-full font-semibold text-[16px] text-white transition-colors duration-300">
            <span className="absolute inset-0 transition-transform duration-500 ease-out -translate-x-full bg-white rounded-full group-hover:translate-x-0"></span>
            <span className="relative z-10 flex items-center gap-3">
              <span className="text-black transition-colors duration-500 group-hover:text-black">
                View All Projects
              </span>
              <Icon
                icon="humbleicons:arrow-up"
                className="text-xl text-black transition-transform duration-500 rotate-45 group-hover:rotate-90 group-hover:text-black"
              />
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hiddencursor-pointer group rounded-3xl"
            >
              <div className="overflow-hidden rounded-3xl border-3 border-transparent group-hover:border-[#BFF747]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between mt-8 text-white lg:px-6">
                <div>
                  <p className="text-base font-normal text-gray-400 font-bricolage">
                    {project.category}
                  </p>
                  <p className="text-[32px] md:text-[36px] font-bold font-bigshoulders">
                    {project.title}
                  </p>
                </div>
                <div className="min-w-15 group h-15 border border-[#BFF747] text-white hover:text-[#0E0E0E] flex justify-center items-center rounded-full transition-all duration-300 group-hover:bg-[#BFF747] group-hover:text-black">
                  <Icon
                    icon="humbleicons:arrow-up"
                    className="text-3xl transition-all duration-300 rotate-45 group-hover:rotate-90"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
