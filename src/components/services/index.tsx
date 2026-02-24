import { Icon } from "@iconify/react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Mobile App Development",
      description:
        "Mi iaculis elementum fermentum morbi sit aliquet. Tellus tortor in pretium.",
    },
    {
      id: "02",
      title: "Web Development",
      description:
        "Mi iaculis elementum fermentum morbi sit aliquet. Tellus tortor in pretium.",
    },
    {
      id: "03",
      title: "API Integration",
      description:
        "Mi iaculis elementum fermentum morbi sit aliquet. Tellus tortor in pretium.",
    },
    {
      id: "04",
      title: "Full Stack",
      description:
        "Mi iaculis elementum fermentum morbi sit aliquet. Tellus tortor in pretium.",
    },
  ];

  return (
    <div className="bg-[#171914] px-5 py-10 md:py-25 xl:px-16 md:px-10">
      <div className="flex items-center justify-center gap-3">
        <Icon icon="mdi:star-four-points" className="text-2xl text-[#BFF747]" />
        <p className="text-2xl font-semibold text-white font-bigshoulders">
          Our Services
        </p>
      </div>

      <p className="font-bigshoulders text-center text-[40px] md:text-[56px] mt-6 leading-[110%] font-semibold text-white">
        The Ease-
        <span className="text-[#BFF747]">Services</span> Process
      </p>
      <div className="mt-10 space-y-6">
        {services.map((service) => (
          <div className="group border border-transparent hover:border-[#BFF747] bg-[#0E0E0E] rounded-3xl flex flex-wrap items-center gap-5 md:p-10 p-5 text-white font-bigshoulders lg:flex-nowrap xl:gap-40 transition-all duration-300">
            <div className="flex items-start gap-5 lg:items-center">
              <p className="text-[24px] font-semibold">{service.id}</p>
              <p className="text-[24px] font-semibold w-full md:w-60">
                {service.title}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 lg:flex-nowrap lg:gap-20">
              <p className="w-full text-base font-normal font-bricolage">
                {service.description}
              </p>
              <div className="relative flex items-center justify-start w-full gap-6 md:w-auto md:justify-center xl:justify-start">
                <div
                  className="min-w-10 h-10 border border-[#BFF747] text-[#BFF747] flex justify-center items-center rounded-full 
                     transition-all duration-300 group-hover:bg-[#BFF747] group-hover:border-[#BFF747]"
                >
                  <Icon
                    icon="humbleicons:arrow-up"
                    className="text-xl transition-all duration-300 rotate-45 group-hover:text-[#0E0E0E]"
                  />
                </div>
                <span className="text-sm font-normal text-white transition-all duration-300 scale-75 opacity-100 w-25 lg:opacity-0 font-bricolage group-hover:opacity-100 group-hover:scale-100">
                  Read More
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
