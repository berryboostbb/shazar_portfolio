import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Logo from "../../assets/Shazar Khan.png";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const navLinks = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Services", hash: "#services" },
    { name: "Portfolio", hash: "#portfolio" },
    { name: "Contact Me", hash: "#contact" },
  ];

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.hash));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  return (
    <header className="py-6 bg-transparent ">
      <div className="flex items-center justify-between px-5 xl:px-32 2xl:px-40 md:px-10">
        <img src={Logo} alt="Shazar Khan Logo" className="w-auto h-12" />
        <nav className="hidden gap-6 font-medium text-white md:flex font-bricolage">
          {navLinks.map((link) => (
            <HashLink
              key={link.name}
              smooth
              to={link.hash}
              className={`cursor-pointer text-base font-normal transition-colors duration-200 ${
                active === link.hash
                  ? "text-[#BFF747]"
                  : "hover:text-[#BFF747] text-white"
              }`}
            >
              {link.name}
            </HashLink>
          ))}
        </nav>
        <a
          href="https://wa.me/923312227735"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative cursor-pointer overflow-hidden hidden group md:flex gap-3 justify-center items-center h-11.25 w-40 font-bricolage border border-[#BFF747] rounded-full font-semibold text-[16px] text-white transition-colors duration-300">
            <span className="absolute inset-0 bg-[#BFF747] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center gap-3">
              <span className="transition-colors duration-500 group-hover:text-black">
                Hire Me
              </span>
              <Icon
                icon="humbleicons:arrow-up"
                className="text-xl text-white transition-transform duration-500 rotate-45 group-hover:rotate-90 group-hover:text-black"
              />
            </span>
          </button>
        </a>
        <div className="flex items-center md:hidden">
          {" "}
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
            <HashLink
              key={link.name}
              smooth
              to={link.hash}
              onClick={() => setMobileMenuOpen(false)}
              className={`cursor-pointer text-[18px] transition-colors duration-200 ${
                active === link.hash
                  ? "text-[#BFF747]"
                  : "hover:text-[#BFF747] text-white"
              }`}
            >
              {link.name}
            </HashLink>
          ))}
          <a
            href="https://wa.me/923312227735"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 px-6 py-2.5 text-[#BFF747] border text-[24px] border-[#BFF747] rounded-full font-semibold">
              Hire Me
            </button>
          </a>
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
