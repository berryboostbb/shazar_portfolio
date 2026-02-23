import { Icon } from "@iconify/react";

export default function WeAre() {
  return (
    <div className="bg-[#0E0E0E]">
      <div className="py-27 xl:px-16 md:px-10 px-5">
        <div className="flex flex-wrap gap-5 lg:gap-0 justify-between items-center">
          <div>
            <div className="flex gap-3 items-center ">
              <Icon
                icon="mdi:star-four-points"
                className="text-2xl text-[#BFF747]"
              />
              <p className="font-bigshoulders text-2xl font-semibold text-white ">
                We Are We
              </p>
            </div>
            <p className="font-bigshoulders text-[40px] md:text-[56px] mt-6 leading-[110%] font-semibold text-white">
              Solving Problems With <br /> Lntuitive{" "}
              <span className="text-[#BFF747]">Design</span>
            </p>
          </div>
          <div className="md:w-[40%] w-full">
            <p className="font-bricolage  text-[18px]  font-normal text-white ">
              Mauris risus augue pulvinar augue sed et. Risus volutpat posuere
              commodo aenean in. Tristique at lectus aliquam quis aliquam
              aenean. Ipsum sit proin dolor nam odio dignissim vel integer.
            </p>
            <button className="bg-[#BFF747] flex gap-2 justify-center items-center font-bricolage font-medium text-[#0E0E0E] rounded-full h-12 w-50 cursor-pointer mt-5">
              More About Me
              <Icon
                icon="humbleicons:arrow-up"
                className="text-xl text-[#000000] rotate-45"
              />{" "}
            </button>
          </div>
        </div>
        <div className="mt-18  flex-wrap flex gap-7 ">
          <div className="bg-[#292929] font-bigshoulders h-80 w-full md:w-[calc(33.33%-18.66px)] p-10 text-white">
            <p className="text-[84px] font-bold">10+</p>
            <p className="text-[32px] font-bold">Years Of My</p>
            <p className="ml-10 text-[32px] font-bold">Experience...</p>
          </div>{" "}
          <div className="bg-[#292929] lg:mt-20 mt-0 font-bigshoulders h-80 w-full md:w-[calc(33.33%-18.66px)] p-10 text-white">
            <p className="text-[84px] font-bold">1400k</p>
            <p className="text-[32px] font-bold">Clients Satisfied</p>
            <p className="ml-10 text-[32px] font-bold"> Worldwide...</p>
          </div>{" "}
          <div className="bg-[#292929] font-bigshoulders w-full h-80 md:w-[calc(33.33%-18.66px)] p-10 text-white">
            <p className="text-[84px] font-bold">500k</p>
            <p className="text-[32px] font-bold">Successfully</p>
            <p className="ml-10 text-[32px] font-bold">Project Done...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
