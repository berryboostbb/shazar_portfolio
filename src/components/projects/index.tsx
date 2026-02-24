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
      <div className="px-5 py-10 md:py-25 xl:px-16 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              <Icon
                icon="mdi:star-four-points"
                className="text-2xl text-[#BFF747]"
              />
              <p className="text-2xl font-semibold text-white font-bigshoulders">
                Projects
              </p>
            </div>

            <p className="font-bigshoulders text-[40px] md:text-[56px] mt-6 leading-[110%] font-semibold text-white">
              My Featured <span className="text-[#BFF747]">Portfolio</span>
            </p>
          </div>

          <button className="bg-[#BFF747] flex gap-2 justify-center items-center font-bricolage font-medium text-[#0E0E0E] rounded-full h-12 px-6 transition-all duration-300 hover:bg-white">
            View All Projects
            <Icon icon="humbleicons:arrow-up" className="text-xl rotate-45" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden cursor-pointer group rounded-3xl"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full transition-all duration-500 group-hover:scale-110"
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
                <div className="min-w-10 h-10 border border-[#BFF747] text-[#BFF747] flex justify-center items-center rounded-full transition-all duration-300 group-hover:bg-[#BFF747] group-hover:text-black">
                  <Icon
                    icon="humbleicons:arrow-up"
                    className="text-xl transition-all duration-300 rotate-45"
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
