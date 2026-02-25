import { Icon } from "@iconify/react";
import Header from "../../components/Header";
import Hersection from "../../components/heroSection";
import BGimage from "../../assets/Rectangle 41426.png";
import Services from "../../components/services";
import Project from "../../components/projects";
import Experience from "../../components/experience";
import Testimonial from "../../components/testimonial";
import CustomCursor from "../../components/CustomCursor";
import WeAre from "../../components/WeAre";
import Footer from "../../components/footer";

function Home() {
  return (
    <div className="relative">
      <CustomCursor />
      <div
        style={{
          backgroundImage: `url(${BGimage})`,
        }}
        className="h-screen bg-no-repeat bg-cover"
      >
        <Header />
        <Hersection />
      </div>
      <div className="bg-[#292929] overflow-hidden py-4 relative">
        <div className="gap-6 scroll-track" style={{ display: "flex" }}>
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex items-center w-auto gap-3"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                <Icon
                  icon="mdi:star-four-points"
                  style={{ fontSize: "24px", color: "#BFF747" }}
                />
                <p className="text-2xl text-white uppercase font-bigShoulders">
                  The Best Solution
                </p>
              </div>
            ))}
        </div>
        <style>
          {`
      .scroll-track {
        animation: scroll 20s linear infinite;
      }

      @keyframes scroll {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `}
        </style>
      </div>
      <WeAre />
      <Services />
      <Project />
      <Experience />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
