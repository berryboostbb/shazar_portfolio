import { Icon } from "@iconify/react";
import Grazle from "../../assets/Project/Rectangle41427.png";
import MediTour from "../../assets/Project/Meditour.png";
import Procuremnet from "../../assets/Project/Procurement.png";
import Alhai from "../../assets/Project/Alhai.png";
import { motion } from "framer-motion";
export default function Project() {
  const projects = [
    {
      id: 1,
      category: "Web / Development",
      title: "MediTour",
      image: MediTour,
      link: "https://meditour.global/",
    },
    {
      id: 2,
      category: "Web / Development",
      title: "Grazle",
      image: Grazle,
      link: "https://grazle-web-57uc.vercel.app/",
    },

    {
      id: 3,
      category: "Web / Development",
      title: "Procurement League",
      image: Procuremnet,
      link: "https://procurementleague.com/",
    },
    {
      id: 4,
      category: "Web / Development",
      title: "Alhai ",
      image: Alhai,
      link: "https://alhai.net/",
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
              <p className="text-[18px] font-semibold text-white font-bricolage">
                Projects
              </p>
            </div>

            <p className="font-bigshoulders text-[40px] md:text-[56px] mt-6 leading-[110%] font-semibold text-white">
              My Featured <span className="text-[#BFF747]">Portfolio</span>
            </p>
          </div>

          <button className="relative cursor-pointer overflow-hidden hidden group md:flex gap-3 justify-center items-center h-14 w-50 font-bricolage border border-[#BFF747] bg-[#BFF747] rounded-full font-semibold text-[16px] text-white transition-colors duration-300">
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden cursor-pointer group rounded-3xl"
            >
              <div className="overflow-hidden rounded-3xl border-3 border-transparent group-hover:border-[#BFF747] transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-fill w-full transition-all duration-500 h-70 md:h-60 lg:h-80 2xl:h-126 xl:h-100 group-hover:scale-105"
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="min-w-15 h-15 border border-[#BFF747] text-white flex justify-center items-center rounded-full transition-all duration-300 group-hover:bg-[#BFF747] group-hover:text-black">
                    <Icon
                      icon="humbleicons:arrow-up"
                      className="text-3xl transition-all duration-300 rotate-45 group-hover:rotate-90"
                    />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
