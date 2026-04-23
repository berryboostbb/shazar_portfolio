import { useState } from "react";
import { Icon } from "@iconify/react";

// IMAGES
import berryboost from "../../assets/Project/berryBoost.png";
import Grazle from "../../assets/Project/gazal.png";
import MediTour from "../../assets/Project/mediTour.png";
import Pocho from "../../assets/Project/pouchoo.png";
import Kabi from "../../assets/Project/kabi.png";
import Alhai from "../../assets/Project/alhai.png";
import PharamIntellgence from "../../assets/Project/pharam intellgence.png";
import BBerp from "../../assets/Project/bb360.png";
import GCC from "../../assets/Project/Property 1=Variant9.png";
import Pocurmrnts from "../../assets/Project/pocurmrnts.png";
import medicalTOur from "../../assets/Project/mediTour (2).png";
import meditourAi from "../../assets/Project/Property 1=Variant12.png";
import Medireporder from "../../assets/Project/image 71.png";
import posSysytem from "../../assets/Project/image 72.png";
import nurishVallys from "../../assets/Project/image 73.png";
import Medsen from "../../assets/Project/Property 1=Variant16.png";

export default function Project() {
  const filters = [
    { name: "All", color: "#BFF747" },
    { name: "AI Projects", color: "#F76747" },
    { name: "E-Commerce", color: "#474AF7" },
    { name: "SaaS", color: "#B147F7" },
    { name: "Others", color: "#F747CB" },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      type: "Others",
      title: "Berry Boost",
      category: "Full-Stack Web & Mobile Development",
      image: berryboost,
      url: "https://berryboost.us/",
    },
    {
      id: 2,
      type: "E-Commerce",
      title: "Grazle",
      category: "Full-Stack Web Development",
      image: Grazle,
      url: "https://grazle-web-57uc.vercel.app/",
    },
    {
      id: 3,
      type: "SaaS",
      title: "MediTour ",
      category: "Full-Stack Web & Mobile Development",
      image: MediTour,
      url: "https://meditour.global/",
    },
    {
      id: 4,
      type: "AI Projects",
      title: "Poocho ChatBot",
      category: "App / Development",
      image: Pocho,
      url: "https://poocho-chat-bot.vercel.app/",
    },
    {
      id: 5,
      type: "AI Projects",
      title: "KABI",
      category: "Web / Development",
      image: Kabi,
      url: "https://kabi.ai/",
    },
    {
      id: 6,
      type: "E-Commerce",
      title: "Al-Hai",
      category: "Full-Stack Web & Mobile Development",
      image: Alhai,
      url: "https://alhai.net/",
    },

    {
      id: 7,
      type: "AI Projects",
      title: "Pharam Intelligence RAG",
      category: "Web / Development",
      image: PharamIntellgence,

      url: "https://hr-management-dashboard-ten.vercel.app/",
    },
    {
      id: 8,
      type: "SaaS",
      title: "BB-360",
      category: "Web / Development",
      image: BBerp,
      url: "https://hr-management-dashboard-ten.vercel.app/",
    },
    {
      id: 9,
      type: "Other",
      title: "GCC",
      category: "Web / Development",
      image: GCC,
      url: "https://www.gulbergcitycentre.com/",
    },
    {
      id: 10,
      type: "AI Projects",
      title: "Procurement League",
      category: "Web / Development",
      image: Pocurmrnts,
      url: "https://procurementleague.com/",
    },
    {
      id: 11,
      type: "AI Projects",
      title: "Mediical Tourism AI Advisor",
      category: "Web / Development",
      image: medicalTOur,
      url: "https://meditour.global/",
    },
    {
      id: 12,
      type: "AI Projects",
      title: "MediRep AI Interleague System",
      category: "Web / Development",
      image: meditourAi,
      url: "https://hr-management-dashboard-ten.vercel.app/",
    },
    {
      id: 13,
      type: "E-Commerce",
      title: "WareHouse Management System",
      category: "Web / Development",
      image: Medireporder,
      url: "https://hr-management-dashboard-ten.vercel.app/",
    },
    {
      id: 14,
      type: "SaaS",
      title: "POR System",
      category: "Web / Development",
      image: posSysytem,
      url: "https://medi-rep-front-end.vercel.app/",
    },
    {
      id: 15,
      type: "E-Commerce",
      title: "Organic Nourish Valley",
      category: "Web / Development",
      image: nurishVallys,
      url: "https://organicnourishvalley.com/",
    },
    {
      id: 16,
      type: "E-Commerce",
      title: "Med-sen pharma",
      category: "Web / Development",
      image: Medsen,
      url: "https://www.medsenpharma.com/",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <div className="bg-[#060606]">
      <div className="py-12 md:py-24">
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
          <div className="flex items-center justify-between mt-6">
            <h2 className="font-bigshoulders text-[40px] md:text-[56px]  font-bold text-white">
              My Featured <span className="text-[#BFF747]">Portfolio</span>
            </h2>

            <div className="flex gap-1 ">
              {filters.map((f) => {
                const isActive = activeFilter === f.name;

                return (
                  <div
                    key={f.name}
                    onClick={() => !isActive && setActiveFilter(f.name)}
                    className={`flex justify-center Mohave text-black rounded-full items-center px-5 ${
                      isActive
                        ? "cursor-default bg-[#BFF747] h-12 text-black  "
                        : "cursor-pointer text-white"
                    }`}
                  >
                    <span className=" text-[13px] md:text-2xl whitespace-nowrap">
                      {f.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-9 ">
                      {rowItems.map((project) => (
                        <div key={project.id} className="">
                          <div className="overflow-hidden rounded-3xl border-3 border-transparent group-hover:border-[#BFF747] transition-all duration-300">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="object-cover w-full transition-all duration-500 h-70 md:h-60 lg:h-80 2xl:h-126 xl:h-100 group-hover:scale-105"
                            />
                            <div className=" p-6 flex justify-between items-center text-white ">
                              <div>
                                <p className="font-bricolage text-base">
                                  {project.category}
                                </p>
                                <p className="text-[36px] font-bold font-bigshoulders ">
                                  {project.title}
                                </p>
                              </div>
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="h-12 w-12 cursor-pointer rounded-full flex border border-s-white items-center justify-center">
                                  <Icon
                                    icon="tdesign:arrow-up"
                                    className="text-[#BFF747] text-3xl rotate-45"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
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
