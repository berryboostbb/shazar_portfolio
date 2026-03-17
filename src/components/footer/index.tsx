import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import BGimage from "../../assets/footer bg.png";
import Logo from "../../assets/Shazar Khan.png";
import { HashLink } from "react-router-hash-link";

const MotionHashLink = motion(HashLink);
export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Services", hash: "#services" },
    { name: "Portfolio", hash: "#portfolio" },
    { name: "Contact Me", hash: "#contact" },
  ];
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "mingcute:linkedin-fill",
      link: "https://www.linkedin.com/in/shazarkhan/",
    },
    {
      name: "Fiverr",
      icon: "jam:fiverr",
      link: "https://www.fiverr.com/berryboost_bb",
    },
    {
      name: "Whatapp",
      icon: "mdi:whatsapp",
      link: "https://wa.me/923312227735",
    },
    {
      name: "Github",
      icon: "mynaui:github-solid",
      link: "https://github.com/shazar007",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <>
      <footer
        style={{ backgroundImage: `url(${BGimage})` }}
        className="relative bg-black bg-center bg-no-repeat bg-cover"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center justify-center px-6 py-20 text-center"
        >
          <motion.img
            variants={itemVariants}
            src={Logo}
            alt="Shazar Khan Logo"
            className="w-auto h-16"
          />

          <motion.nav
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mt-8 md:gap-10"
          >
            {navLinks.map((item, index) => (
              <MotionHashLink
                key={index}
                smooth
                to={item.hash}
                variants={itemVariants}
                className="text-white uppercase font-bold text-sm md:text-base font-bricolage cursor-pointer hover:text-[#BFF747] transition duration-300"
              >
                {item.name}
              </MotionHashLink>
            ))}
          </motion.nav>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 mt-10"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#292929] group-hover:bg-[#BFF747] transition duration-300">
                  <Icon
                    icon={social.icon}
                    className="text-xl text-white transition duration-300 group-hover:text-black"
                  />
                </div>
                <p className="text-sm text-white group-hover:text-[#BFF747] transition duration-300">
                  {social.name}
                </p>
              </motion.a>
            ))}
            <a
              href={`https://mail.google.com/mail/?view=cm&to=shazarkhan19@gmail.com&su=${encodeURIComponent(
                "Hello Shazar",
              )}&body=${encodeURIComponent("I want to connect with you")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#292929] group-hover:bg-[#BFF747] transition duration-300">
                <Icon
                  icon="ic:baseline-email"
                  className="text-xl text-white transition duration-300 group-hover:text-black"
                />
              </div>
              <p className="text-sm text-white group-hover:text-[#BFF747] transition duration-300">
                Email
              </p>
            </a>
            <a
              href="https://x.com/shazarkhan_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#292929] group-hover:bg-[#BFF747] transition duration-300">
                <Icon
                  icon="garden:twitter-fill-12"
                  className="text-xl text-white transition duration-300 group-hover:text-black"
                />
              </div>
              <p className="text-sm text-white group-hover:text-[#BFF747] transition duration-300">
                X.com
              </p>
            </a>
          </motion.div>
        </motion.div>

        <div className="border-t border-[#2f2f2f] py-6 xl:px-32 2xl:px-40 md:px-10 flex justify-center md:justify-between items-center flex-wrap gap-4 text-white text-sm font-semibold">
          <div className="flex items-center gap-2">
            <span>Copyright</span>
            <Icon icon="solar:copyright-linear" />
            <span className="text-[#BFF747]">Shazar Khan</span>
          </div>

          <p className="text-gray-400">All Rights Reserved</p>
        </div>
      </footer>

      {showScroll && (
        <div
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="bg-[#BFF747] h-12 w-12 rounded-full flex justify-center items-center fixed bottom-5 right-5 cursor-pointer shadow-lg hover:scale-110 transition duration-300"
        >
          <Icon
            icon="icon-park-outline:arrow-up"
            className="text-2xl text-black"
          />
        </div>
      )}
    </>
  );
}
