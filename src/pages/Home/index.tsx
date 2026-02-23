import { Icon } from "@iconify/react";
import CustomCursor from "../../components/CustomCursor";
import Header from "../../components/Header";
import Hersection from "../../components/heroSection";
import BGimage from "../../assets/Rectangle 41426.png";
import WeAre from "../../components/WeAre";
import Services from "../../components/services";
function Home() {
  return (
    <div className="relative">
      <CustomCursor />
      <div
        style={{
          backgroundImage: `url(${BGimage})`,
        }}
        className="bg-cover bg-no-repeat h-screen"
      >
        <Header />
        <Hersection />
      </div>
      <div className="bg-[#292929] overflow-hidden py-4 relative">
        <div className="scroll-track gap-6" style={{ display: "flex" }}>
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 w-auto"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                <Icon
                  icon="mdi:star-four-points"
                  style={{ fontSize: "24px", color: "#BFF747" }}
                />
                <p className="font-bigShoulders uppercase text-2xl text-white">
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
    </div>
  );
}

export default Home;
