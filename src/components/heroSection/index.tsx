import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function Hersection() {
  const headings = [
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
            <div className="flex justify-center items-center gap-2">
              <Icon
                icon="mdi:star-four-points"
                className="text-2xl text-[#BFF747]"
              />
              <p className="font-bricolage text-2xl ">Hey There</p>
            </div>
            <div className="lg:w-265 w-full relative mx-auto">
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

              <div className="lg:mx-40 mx-5 mt-5">
                <p className="text-start md:text-[18px] text-base w-full font-bricolage mt-3">
                  Mauris risus augue pulvinar augue sed et. Risus volutpat
                  posuere commodo aenean in. Tristique at lectus aliquam quis
                  aliquam aenean. Ipsum sit proin dolor nam odio dignissim vel
                  integer.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-10 lg:mx-40 mx-5">
                <button className="bg-[#BFF747] flex gap-2 justify-center items-center font-bricolage font-medium text-[#0E0E0E] rounded-full h-12 w-50 cursor-pointer mt-5">
                  Download CV
                  <Icon
                    icon="humbleicons:arrow-up"
                    className="text-xl text-[#000000] rotate-45"
                  />{" "}
                </button>{" "}
                <button className="bg-[#0E0E0E] flex gap-2 items-center font-bricolage font-medium text-white rounded-full h-12 w-45 cursor-pointer mt-5">
                  <div className="h-12 bg-[#292929] min-w-12 rounded-full flex justify-center items-center">
                    {" "}
                    <Icon
                      icon="iconoir:play-solid"
                      className="text-xl text-[#BFF747]"
                    />{" "}
                  </div>
                  View Reel
                </button>
              </div>
              <div className="flex gap-5 font-bricolage rotate-270 absolute -left-100 top-48 text-white">
                <p className="text-sm">Facebook</p>
                <p className="text-sm">Twitter</p>
                <p className="text-sm">Linkedin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tailwind cursor animation */}
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
