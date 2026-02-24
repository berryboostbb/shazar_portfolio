import { Icon } from "@iconify/react";

export default function WeAre() {
  return (
    <div className="bg-[#0E0E0E]">
      <div className="px-5 py-10 md:py-25 xl:px-32 2xl:px-40 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-5 lg:gap-0">
          <div>
            <div className="flex items-center gap-3 ">
              <Icon
                icon="mdi:star-four-points"
                className="text-2xl text-[#BFF747]"
              />
              <p className="text-[18px] font-semibold text-white font-bricolage ">
                We Are We
              </p>
            </div>
            <p className="font-bigshoulders text-[40px] md:text-[56px] mt-6 leading-[110%] font-semibold text-white">
              Solving Problems With <br /> Lntuitive{" "}
              <span className="text-[#BFF747]">Design</span>
            </p>
          </div>
          <div className="lg:w-[40%] w-full">
            <p className="font-bricolage  text-[18px]  font-normal text-white ">
              Mauris risus augue pulvinar augue sed et. Risus volutpat posuere
              commodo aenean in. Tristique at lectus aliquam quis aliquam
              aenean. Ipsum sit proin dolor nam odio dignissim vel integer.
            </p>

            <button className="relative mt-6 overflow-hidden hidden group md:flex gap-3 justify-center items-center h-14 w-50 font-bricolage border border-[#BFF747] bg-[#BFF747] rounded-full font-semibold text-[16px] text-white transition-colors duration-300">
              <span className="absolute inset-0 transition-transform duration-500 ease-out -translate-x-full bg-white rounded-full group-hover:translate-x-0"></span>
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-black transition-colors duration-500 group-hover:text-black">
                  More About Me
                </span>
                <Icon
                  icon="humbleicons:arrow-up"
                  className="text-xl text-black transition-transform duration-500 rotate-45 group-hover:rotate-90 group-hover:text-black"
                />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mt-18 gap-7 ">
          <div className="bg-[#292929] font-bigshoulders h-80 w-full md:w-[calc(33.33%-18.66px)] p-10 md:p-5 lg:p-10 text-white">
            <p className="text-[84px] font-bold">10+</p>
            <p className="lg:text-[32px] text-[24px] font-bold">Years Of My</p>
            <p className="ml-14 lg:text-[32px] text-[24px] font-bold">
              Experience...
            </p>
          </div>{" "}
          <div className="bg-[#292929] md:mt-20 mt-0 font-bigshoulders h-80 w-full md:w-[calc(33.33%-18.66px)] p-10 md:p-5 lg:p-10 text-white">
            <p className="text-[84px] font-bold">1400k</p>
            <p className="lg:text-[32px] text-[24px] font-bold">
              Clients Satisfied
            </p>
            <p className="ml-14 lg:text-[32px] text-[24px] font-bold">
              {" "}
              Worldwide...
            </p>
          </div>{" "}
          <div className="bg-[#292929] font-bigshoulders w-full h-80 md:w-[calc(33.33%-18.66px)] p-10 md:p-5 lg:p-10 text-white">
            <p className="text-[84px] font-bold">500k</p>
            <p className="lg:text-[32px] text-[24px] font-bold">Successfully</p>
            <p className="ml-14 lg:text-[32px] text-[24px] font-bold">
              Project Done...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
