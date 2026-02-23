import { Icon } from "@iconify/react";

export default function Services() {
  return (
    <div className="bg-[#0E0E0E] py-27 xl:px-16 md:px-10 px-5">
      {" "}
      <div className="flex gap-3 items-center  justify-center">
        <Icon icon="mdi:star-four-points" className="text-2xl text-[#BFF747]" />
        <p className="font-bigshoulders text-2xl font-semibold text-white ">
          Our Services
        </p>
      </div>
      <p className="font-bigshoulders text-center text-[40px] md:text-[56px] mt-6 leading-[110%] font-semibold text-white">
        The Ease-
        <span className="text-[#BFF747]">Services</span> {""}
        Process
      </p>
      <div className="mt-10 ">
        <div className="lg:px-10 md:px-0 py-10 font-bigshoulders flex md:flex-nowrap flex-wrap lg:gap-40 gap-5 text-white items-center">
          <div className="flex gap-5  lg:items-center items-start">
            <p className="text-[24px] font-semibold ">01</p>{" "}
            <p className="text-[24px] font-semibold w-full md:w-60">
              Mobile App Development
            </p>
          </div>
          <div className="flex gap-20 items-center">
            <p className="text-base font-normal font-bricolage">
              Mi iaculis elementum fermentum morbi sit aliquet. Tellus tortor in
              pretium.
            </p>{" "}
            <div className="min-w-10 h-10 border border-[#BFF747] text-[#BFF747] flex justify-center items-center rounded-full">
              {" "}
              <Icon
                icon="humbleicons:arrow-up"
                className="text-xl text-[#BFF747] rotate-45"
              />{" "}
            </div>
          </div>
        </div>{" "}
        <div className="lg:px-10 md:px-0 py-10 font-bigshoulders flex md:flex-nowrap flex-wrap lg:gap-40 gap-5 text-white items-center">
          <div className="flex gap-5  lg:items-center items-start">
            <p className="text-[24px] font-semibold ">02</p>{" "}
            <p className="text-[24px] font-semibold w-full md:w-60">
              Web Development
            </p>
          </div>
          <div className="flex gap-20 items-center">
            <p className="text-base font-normal font-bricolage">
              Mi iaculis elementum fermentum morbi sit aliquet. Tellus tortor in
              pretium.
            </p>{" "}
            <div className="min-w-10 h-10 border border-[#BFF747] text-[#BFF747] flex justify-center items-center rounded-full">
              {" "}
              <Icon
                icon="humbleicons:arrow-up"
                className="text-xl text-[#BFF747] rotate-45"
              />{" "}
            </div>
          </div>
        </div>{" "}
        <div className="lg:px-10 md:px-0 py-10 font-bigshoulders flex md:flex-nowrap flex-wrap lg:gap-40 gap-5 text-white items-center">
          <div className="flex gap-5  lg:items-center items-start">
            <p className="text-[24px] font-semibold ">03</p>{" "}
            <p className="text-[24px] font-semibold w-full md:w-60">
              API Intergration
            </p>
          </div>
          <div className="flex gap-20 items-center">
            <p className="text-base font-normal font-bricolage">
              Mi iaculis elementum fermentum morbi sit aliquet. Tellus tortor in
              pretium.
            </p>{" "}
            <div className="min-w-10 h-10 border border-[#BFF747] text-[#BFF747] flex justify-center items-center rounded-full">
              {" "}
              <Icon
                icon="humbleicons:arrow-up"
                className="text-xl text-[#BFF747] rotate-45"
              />{" "}
            </div>
          </div>
        </div>{" "}
        <div className="lg:px-10 md:px-0 py-10 font-bigshoulders flex md:flex-nowrap flex-wrap lg:gap-40 gap-5 text-white items-center">
          <div className="flex gap-5  lg:items-center items-start">
            <p className="text-[24px] font-semibold ">04</p>{" "}
            <p className="text-[24px] font-semibold w-full md:w-60">
              Full Stack
            </p>
          </div>
          <div className="flex gap-20 items-center">
            <p className="text-base font-normal font-bricolage">
              Mi iaculis elementum fermentum morbi sit aliquet. Tellus tortor in
              pretium.
            </p>{" "}
            <div className="min-w-10 h-10 border border-[#BFF747] text-[#BFF747] flex justify-center items-center rounded-full">
              {" "}
              <Icon
                icon="humbleicons:arrow-up"
                className="text-xl text-[#BFF747] rotate-45"
              />{" "}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
