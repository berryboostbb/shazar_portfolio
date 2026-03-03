import { Icon } from "@iconify/react";
import ReactLogo from "../../assets/react.png";
import Node from "../../assets/node.png";
import Mongo from "../../assets/mongo.png";
import JS from "../../assets/js.png";
import Next from "../../assets/next.jpg";
import Redux from "../../assets/redux.png";
import Firebase from "../../assets/firbase.png";
import TS from "../../assets/ts.png";
import Tailwind from "../../assets/tailwind.png";
import MUI from "../../assets/MUI.png";
import JWT from "../../assets/jwt.png";
import Git from "../../assets/git.png";
import Socket from "../../assets/socket.png";
import Express from "../../assets/express.webp";
import Stripe from "../../assets/Stripe.png";
import Python from "../../assets/python.png";

export default function Experience() {
  const experiences = [
    {
      year: "2024",
      role: "Full Stack Developer",
      company: "BerryBoost",
    },
    {
      year: "2023",
      role: "MERN Stack Developer",
      company: "TechNova",
    },
    {
      year: "2022",
      role: "Frontend Developer",
      company: "WebCore",
    },
    {
      year: "2021",
      role: "Junior Developer",
      company: "CodeLab",
    },
  ];
  const skills = [
    { name: "React js", percent: "98%", image: ReactLogo },
    { name: "React Native", percent: "94%", image: ReactLogo },
    { name: "Next.js", percent: "90%", image: Next },
    { name: "Node.js", percent: "88%", image: Node },
    { name: "Express.js", percent: "91%", image: Express },
    { name: "Python", percent: "95%", image: Python },
    { name: "MongoDB", percent: "85%", image: Mongo },
    { name: "JavaScript", percent: "92%", image: JS },
    { name: "TypeScript", percent: "99%", image: TS },
    { name: "Redux", percent: "94%", image: Redux },
    { name: "Firebase", percent: "98%", image: Firebase },
    { name: "Stripe", percent: "96%", image: Stripe },
    { name: "Socket.io ", percent: "94%", image: Socket },
    { name: "Tailwind css", percent: "92%", image: Tailwind },
    { name: "Material Ui", percent: "94%", image: MUI },
    { name: "JWT", percent: "98%", image: JWT },
    { name: "Git", percent: "93%", image: Git },
  ];
  return (
    <div className="bg-[#171914] px-5 py-10 md:py-25 xl:px-32 2xl:px-40 md:px-10">
      <div className="flex items-center gap-3">
        <Icon icon="mdi:star-four-points" className="text-2xl text-[#BFF747]" />
        <p className="text-[18px] font-semibold text-white font-bricolage">
          My Experience
        </p>
      </div>
      <p className="font-bigshoulders text-[40px] md:text-[56px] mt-6 leading-[110%] font-semibold text-white">
        My Work <span className="text-[#BFF747]">Experience</span>
      </p>
      <div className="mt-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative py-6 border-b cursor-pointer border-[#C1C1C1]/16 group"
          >
            <div className="flex flex-col gap-2 text-white md:flex-row md:items-center md:justify-between">
              <p className="text-base font-bold font-bigshoulders">
                {exp.year}
              </p>

              <p className="text-[24px] font-bold font-bigshoulders transition-colors duration-300 group-hover:text-[#BFF747]">
                {exp.role}
              </p>

              <p className="text-[18px] font-bold font-bigshoulders">
                {exp.company}
              </p>
            </div>
            <span
              className="absolute left-0 bottom-0 h-0.5 w-full bg-[#BFF747] 
                scale-x-0 opacity-0 origin-center transition-all duration-700 ease-out group-hover:scale-x-100 group-hover:opacity-100"
            ></span>{" "}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center mt-20 gap-y-5 rounded-2xl ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#060606] w-54.5 h-54.5 border-r border-[#C1C1C1]/40 last:border-0 p-4 flex flex-col justify-center items-center aspect-square transition-all duration-300 hover:bg-[#111111]"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="object-contain w-20 h-20 bg-white rounded-xl"
            />

            <div className="flex items-center gap-4 mt-4">
              <p className="text-[28px] md:text-[24px] font-bold font-bigshoulders text-[#BFF747]">
                {skill.percent}
              </p>
              <p className="text-[18px] md:text-[18px] font-bold font-bigshoulders text-white">
                {skill.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
