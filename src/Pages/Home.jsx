import Layout from "@/Components/Layout";
import { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

import picoPremium from "@/assets/pico/pico-premium.png";
import sonopoint from "@/assets/sonopoint/sonopoint.png";

function Home() {
  const [slide, setSlide] = useState(0);

  return (
    <div id="home" className="">
      <Layout>
        <div className="h-screen bg-home-img bg-scroll bg-cover">
          <FaArrowCircleLeft
            className="absolute top-[50%] left-[2%] cursor-pointer"
            size={"30px"}
            onClick={() => {
              if (slide !== 0) {
                setSlide((x) => x - 1);
              }
              setSlide(0);
            }}
          />
          <FaArrowCircleRight
            className="absolute top-[50%] right-[5%] cursor-pointer"
            size={"30px"}
            onClick={() => {
              if (slide !== 0) {
                setSlide((x) => x + 1);
              }
              setSlide(0);
            }}
          />
          <div className="z-30 h-screen pt-16 lg:h-auto lg:ml-32">
            <h2
              className={`flex flex-col justify-center ml-10 space-y-5 mt-28 lg:mt-40 lg:ml-4 ${
                slide == 0 ? "flex" : "hidden"
              }`}
            >
              <span className="text-3xl font-semibold tracking-wider lg:text-6xl text-link">
                Revolutionize
              </span>
              <span className="text-3xl font-semibold tracking-wider lg:text-6xl text-link">
                Enchant
              </span>
              <span className="text-3xl font-semibold tracking-wider lg:text-6xl text-link">
                Gratification
              </span>
            </h2>

            <div
              className={`flex flex-col justify-center ml-10 space-y-5 mt-28 lg:mt-20 lg:ml-40 ${
                slide === 1 ? "flex" : "hidden"
              }`}
            >
              <img src={picoPremium} alt="" className="w-80 h-[600px]" />
            </div>
            <div
              className={`flex flex-col justify-center ml-10 space-y-5 mt-28 lg:mt-20 lg:ml-40 ${
                slide === 2 ? "flex" : "hidden"
              }`}
            >
              <img src={sonopoint} alt="" className="w-80 h-[600px]" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
