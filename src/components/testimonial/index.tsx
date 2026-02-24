import { Icon } from "@iconify/react";
import dummay from "../../assets/fccb7709e983a930e1ecc0df74f910ff8d2e3256.jpg";

export default function Testimonial() {
  return (
    <div className="bg-[#060606] px-5 py-10 md:py-25 xl:px-32 2xl:px-40 md:px-10 h-256 flex flex-wrap gap-10 lg:gap-0  justify-between items-center">
      <div className="md:w-[40%] w-full">
        <div className="flex items-center gap-3">
          <Icon
            icon="mdi:star-four-points"
            className="text-2xl text-[#BFF747]"
          />
          <p className="text-2xl font-semibold text-white font-bricolage">
            Testimonial
          </p>
        </div>

        <p className="font-bigshoulders text-[40px] md:text-[56px] mt-6 leading-[110%] font-semibold text-white">
          Our Client Awesome <br />{" "}
          <span className="text-[#BFF747]">Testimonial</span>
        </p>
        <div className="md:w-100 w-full text-white mt-10 gap-2 bg-[#171914] px-12 md:px-20 p-20 flex items-center justify-center">
          <p className="text-[48px] font-semibold font-bigshoulders">4.8</p>
          <div>
            <p className="text-sm font-bold text-white ">
              1200+ Client Rating.
            </p>
            <div className="flex items-center">
              <Icon icon="openmoji:star" className="text-3xl" />
              <Icon icon="openmoji:star" className="text-3xl" />
              <Icon icon="openmoji:star" className="text-3xl" />
              <Icon icon="openmoji:star" className="text-3xl" />
              <Icon icon="openmoji:star" className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171914] border border-[#BFF747] rounded-2xl lg:w-1/2 w-full p-10 text-white">
        <div className="flex flex-wrap items-center gap-6">
          <div className="h-20 bg-white rounded-full min-w-20">
            <img src={dummay} className="w-full h-full rounded-full" />
          </div>{" "}
          <div>
            <p className="text-[36px] font-bold font-bigshoulders">
              Charlie Rosser
            </p>
            <p className="text-sm font-bold ">Senior Manager</p>
          </div>
        </div>
        <div className="relative flex items-start mt-10 ">
          <p className="absolute lg:bottom-12 md:bottom-19 bottom-45 text-[84px] text-[#BFF747] rotate-180 leading-[100%] font-bold font-bigshoulders">
            “
          </p>
          <p className="md:text-[18px] text-base ml-10 font-bold font-bigshoulders ">
            Sit odio in dictum venenatis orci mauris nunc sem. Consectetur dui
            morbi sed morbi justo sit erat. Tincidunt turpis erat purus sagittis
            facilisi netus aliquam arcu aenean. At nunc odio et nibh varius
            nibh. Sed viverra proin elit eget. Mus et dignissim aliquam eget
            risus.
          </p>
        </div>
      </div>
    </div>
  );
}
