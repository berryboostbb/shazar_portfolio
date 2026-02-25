import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import BGimage from "../../assets/footer bg.png";
import Logo from "../../assets/Shazar Khan.png";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["ABOUT ME", "SERVICE", "PORTFOLIO", "BLOG", "CONTACT US"];
  const socialLinks = [
    { name: "LinkedIn", icon: "mingcute:linkedin-fill", link: "#" },
    { name: "Facebook", icon: "bxl:facebook", link: "#" },
    { name: "Instagram", icon: "mdi:instagram", link: "#" },
    { name: "Twitter", icon: "mdi:twitter", link: "#" },
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
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-white uppercase font-bold text-sm md:text-base font-bricolage cursor-pointer hover:text-[#BFF747] transition duration-300"
              >
                {item}
              </motion.p>
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
