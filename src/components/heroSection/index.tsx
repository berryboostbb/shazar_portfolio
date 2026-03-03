import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import CV from "../../assets/Shazar_2 Resume.pdf";
export default function Hersection() {
  const headings = [
    "AI Powerd Solutions",
    "Web Developer",
    "Frontend Developer",
    "Mobile App Developer",
    "Full Stack Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed = 120;
  const deletingSpeed = 100;
  const delayAfterTyping = 2000;

  useEffect(() => {
    let timeout: any;

    if (typing) {
      if (charIndex < headings[index].length) {
        timeout = setTimeout(() => {
          setText(headings[index].slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), delayAfterTyping);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(headings[index].slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        setTyping(true);
        setIndex((index + 1) % headings.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, index, typing]);

  const firstWord = text.split(" ")[0] || "";
  const rest = text.split(" ").slice(1).join(" ") || "";

  return (
    <>
      {" "}
      <div className="bg-transparent h-[calc(100vh-96px)] w-full">
        <div className="xl:px-16 md:px-10 px-5 flex justify-center items-center w-full h-[calc(100vh-120px)]">
          <div className="text-white">
            <div className="flex items-center justify-center gap-2">
              <Icon
                icon="mdi:star-four-points"
                className="text-2xl text-[#BFF747]"
              />
              <p className="text-[18px] font-bricolage ">Hey There</p>
            </div>
            <div className="relative w-full mx-auto lg:w-265">
              <p className=" lg:text-[130px]  md:text-[100px] text-[40px] text-center leading-[100%] font-bigshoulders font-bold">
                I’m Shazar{" "}
                <span className="lg:text-[100px]  md:text-[80px] text-[40px] text-outline">
                  Khan
                </span>
              </p>
              <p className="xl:text-[130px] lg:text-[120px]  md:text-[80px] text-[40px] md:h-31 h-6 text-center leading-[100%] font-bigshoulders font-bold mb-6">
                <span className="text-[#BFF747]">{firstWord}</span>{" "}
                <span className="text-white">{rest}</span>
                <span className="animate-blink"></span>
              </p>

              <div className="mx-5 mt-5 lg:mx-40">
                <p className="text-start md:text-[18px] text-base w-full font-bricolage mt-3">
                  I engineer high-performance digital platforms that turn bold
                  ideas into scalable web solutions. With deep full-stack
                  expertise and precision-driven architecture, I craft seamless
                  user experiences that perform at every level. I don’t just
                  build products — I create technology that accelerates growth
                  and shapes the future.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mx-5 mt-10 lg:mx-40">
                <a href={CV} download="Shazar-Khan-CV.pdf" className="mt-4">
                  <button className="relative cursor-pointer overflow-hidden hidden group md:flex gap-3 justify-center items-center h-14 w-50 font-bricolage border border-[#BFF747] bg-[#BFF747] rounded-full font-semibold text-[16px] text-white transition-colors duration-300">
                    <span className="absolute inset-0 transition-transform duration-500 ease-out -translate-x-full bg-white rounded-full group-hover:translate-x-0"></span>
                    <span className="relative z-10 flex items-center gap-3">
                      <span className="text-black transition-colors duration-500 group-hover:text-black">
                        Download CV
                      </span>
                      <Icon
                        icon="humbleicons:arrow-up"
                        className="text-xl text-black transition-transform duration-500 rotate-45 group-hover:rotate-90 group-hover:text-black"
                      />
                    </span>
                  </button>
                </a>
                <button className="bg-[#0E0E0E] cursor-pointer flex gap-2 items-center font-bricolage font-medium text-white rounded-full h-14 w-45 mt-5">
                  <div className="h-14 bg-[#292929] min-w-14 rounded-full flex justify-center items-center">
                    {" "}
                    <Icon
                      icon="iconoir:play-solid"
                      className="text-xl text-[#BFF747]"
                    />{" "}
                  </div>
                  View Reel
                </button>
              </div>
              <div className="absolute flex gap-5 text-white font-bricolage lg:rotate-270 2xl:-left-100 xl:-left-30 rotate left-6 top-100 md:top-120 lg:top-48">
                <p className="text-sm">Facebook</p>
                <p className="text-sm">Twitter</p>
                <p className="text-sm">Linkedin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </>
  );
}
