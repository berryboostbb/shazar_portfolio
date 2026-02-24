import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../../assets/Shazar Khan.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <header className="py-6 bg-transparent ">
      {" "}
      <div className="flex items-center justify-between mx-5 xl:mx-16 md:mx-10">
        <img src={Logo} alt="Shazar Khan Logo" className="w-auto h-12" />

        <nav className="hidden gap-6 font-medium text-white md:flex font-bricolage">
          {navLinks.map((link) => (
            <p
              key={link}
              className="cursor-pointer hover:text-[#BFF747] text-base font-normal transition-colors duration-200"
            >
              {link}
            </p>
          ))}
        </nav>

        <button className="hidden md:block h-11.25 w-30 font-bricolage text-[#BFF747] border border-[#BFF747] rounded-lg font-semibold text-[24px] ">
          Hire Me
        </button>
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-3xl text-white focus:outline-none"
          >
            <Icon icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} width="32" />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="flex flex-col gap-4 px-5 py-6 mt-5 font-medium text-white bg-black md:hidden animate-slideDown">
          {navLinks.map((link) => (
            <p
              key={link}
              className="cursor-pointer hover:text-[#BFF747] transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </p>
          ))}
          <button className="mt-4 px-6 py-2.5 text-[#BFF747] border  text-[24px] border-[#BFF747] rounded-lg font-semibold ">
            Hire Me
          </button>
        </nav>
      )}
      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
        `}
      </style>
    </header>
  );
}
