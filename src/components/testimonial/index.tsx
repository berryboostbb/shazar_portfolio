import { Icon } from "@iconify/react";
import dummay from "../../assets/fccb7709e983a930e1ecc0df74f910ff8d2e3256.jpg";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Michael Anderson",
    role: "CEO, TechNova Solutions",
    image: dummay,
    text: "Working with Shazar was one of the best decisions for our startup. His 6+ years of MERN stack experience truly shows in his clean architecture, scalable backend structure, and smooth React frontend implementation. He delivered our SaaS platform ahead of schedule with exceptional performance optimization.",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager, FinEdge",
    image:
      "https://as2.ftcdn.net/jpg/02/44/43/91/1000_F_244439183_Wn6zbxmjuJTCaRodCGH9MFDUL1r3yCuK.jpg",
    text: "Shazar’s expertise in React Native helped us launch our mobile app on both iOS and Android seamlessly. The UI/UX was pixel-perfect, and the app performance exceeded our expectations. His communication and problem-solving skills made the entire development process smooth.",
  },
  {
    name: "Daniel Roberts",
    role: "Founder, EcomBridge",
    image:
      "https://thumbs.dreamstime.com/b/vector-design-avatar-dummy-symbol-collection-image-icon-stock-isolated-object-set-illustration-137162606.jpg",
    text: "We hired Shazar for a complete MERN stack eCommerce solution, and he delivered beyond expectations. From secure authentication to advanced admin dashboards and API integrations, everything was built with scalability in mind. Highly recommended for full-stack projects.",
  },
  {
    name: "Emily Carter",
    role: "CTO, StartupX",
    image: dummay,
    text: "Shazar has a deep understanding of modern JavaScript frameworks. His ability to architect complex backend systems with Node.js and MongoDB while maintaining a beautiful React frontend is impressive. He thinks long-term and builds products that scale.",
  },
  {
    name: "James Wilson",
    role: "Operations Director, AppFlow",
    image: "https://cdn-icons-png.freepik.com/512/9347/9347560.png",
    text: "Our React Native application performance improved drastically after Shazar optimized the codebase. His debugging skills, API structuring, and state management implementation were top-tier. A true professional with enterprise-level development experience.",
  },
];
export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-black">
      <div className="bg-[#060606] px-5 py-10 md:py-25 xl:px-32 2xl:px-40 md:px-10 h-150 flex flex-wrap gap-10 lg:gap-0  justify-between items-center">
        <div className="lg:w-[40%] w-full">
          <div className="flex items-center gap-3">
            <Icon
              icon="mdi:star-four-points"
              className="text-2xl text-[#BFF747]"
            />
            <p className="text-[18px] font-semibold text-white font-bricolage">
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
        <div className="relative xl:w-1/2 w-full h-96 md:h-112.5 flex items-center justify-center overflow-visible">
          {testimonials.map((item, i) => {
            const position =
              (i - index + testimonials.length) % testimonials.length;

            let scale = 0;
            let translateX = 0;
            let translateY = 0;
            let rotate = 0;
            let opacity = 0;
            let zIndex = 0;
            let border = "none";
            const isMobile = window.innerWidth < 768;

            if (position === 0) {
              scale = 1;
              translateY = -20;
              rotate = 0;
              opacity = 1;
              zIndex = 50;
              border = "1px solid #BFF747";
            } else if (position === 1) {
              scale = 0.9;
              translateX = isMobile ? -40 : -70;
              translateY = isMobile ? -10 : -30;
              rotate = isMobile ? -1 : -3;
              opacity = 0.9;
              zIndex = 40;
            } else if (position === 2) {
              scale = 0.9;
              translateX = isMobile ? 40 : 70;
              translateY = isMobile ? -10 : -30;
              rotate = isMobile ? 1 : 3;
              opacity = 0.9;
              zIndex = 40;
            } else if (position === 3) {
              scale = 0.8;
              translateX = isMobile ? -60 : -140;
              translateY = isMobile ? -10 : -30;
              rotate = isMobile ? -2 : -6;
              opacity = 0.6;
              zIndex = 30;
            } else if (position === 4) {
              scale = 0.8;
              translateX = isMobile ? 60 : 140;
              translateY = isMobile ? -10 : -30;
              rotate = isMobile ? 2 : 6;
              opacity = 0.6;
              zIndex = 30;
            } else {
              return null;
            }

            return (
              <div
                key={i}
                className="absolute w-full transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                  opacity,
                  zIndex,
                }}
              >
                <div
                  className="bg-[#171914] rounded-2xl p-5 md:p-10 text-white shadow-2xl"
                  style={{ border }}
                >
                  <div className="flex items-center gap-6">
                    <div className="h-20 bg-white rounded-full min-w-20">
                      <img
                        src={item.image}
                        className="w-full h-full rounded-full"
                      />
                    </div>

                    <div>
                      <p className="text-[36px] font-bold font-bigshoulders">
                        {item.name}
                      </p>
                      <p className="text-sm font-bold">{item.role}</p>
                    </div>
                  </div>

                  <div className="relative flex items-start mt-10">
                    <p className="absolute -top-18 text-[84px] text-[#BFF747] rotate-180 font-bold font-bigshoulders">
                      “
                    </p>
                    <p className="md:text-[18px] w-[80%] text-base ml-10 font-bold font-bigshoulders">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div className="scroll-container bg-[#060606] lg:pt-5 pt-20 mt-58 md:mt-80 xl:mt-0">
        <div className="scroll-content">
          <p className="scroll-text font-bigshoulders">Have a In Mind?</p>
          <p className="scroll-text font-bigshoulders">Lets Work TOGETHER</p>
          <p className="scroll-text font-bigshoulders">Have a In Mind?</p>
          <p className="scroll-text font-bigshoulders">
            Lets Work TOGETHER
          </p>{" "}
          <p className="scroll-text font-bigshoulders">Have a In Mind?</p>
          <p className="scroll-text font-bigshoulders">Lets Work TOGETHER</p>
        </div>

        <style>
          {`
      .scroll-container {
        overflow: hidden;
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
      }

      .scroll-content {
        display: flex;
        white-space: nowrap;
        animation: marquee 100s linear infinite;
      }
        .scroll-content:hover {
      animation-play-state: paused;
    }     
      .scroll-text {
        font-size: 124px;
        font-weight: bold;
        color: transparent;
        margin-right: 40px;
        /* Outline effect */
        -webkit-text-stroke: 1px #C1C1C1; 
        text-stroke: 1px #C1C1C1;
        transition: color 0.3s;
      }

      .scroll-text:hover {
        color: #BFF747;
        -webkit-text-stroke: 0px;
        text-stroke: 0px;
      }

      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}
        </style>
      </div>
    </div>
  );
}
