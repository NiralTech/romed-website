import Layout from "@/Components/Layout";
import home from "@/assets/home.svg";
import prod1 from "@/assets/product-1-slide.png";
import prod2 from "@/assets/product-2-slide.png";

import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div id="home" className="">
      <Layout>
        <Carousel
          className=""
          showArrows={true}
          useKeyboardArrows={true}
          transitionTime={500}
          showThumbs={false}
          showStatus={false}
        >
          <div className="bg-scroll bg-cover mt-p4">
            <div className="lg:h-auto lg:my-32">
              <div
                className={` absolute z-10 flex flex-col items-start left-10  sm:left-40 sm:space-y-5 mt-10 lg:mt-40 lg:ml-4`}
              >
                <span className="text-2xl  tracking-wider lg:text-6xl text-link">
                  Revolutionize
                </span>
                <span className="text-2xl  tracking-wider lg:text-6xl text-link">
                  Enchant
                </span>
                <span className="text-2xl tracking-wider lg:text-6xl text-link">
                  Gratification
                </span>
              </div>
              <div className="mt-16">
                <img
                  src={home}
                  className="h-full w-full z-1 object-cover"
                ></img>
              </div>
            </div>
          </div>
          {/* <div className="h-screen bg-slide-1 bg-scroll bg-cover mt-p4"></div> */}
          <div className="mt-16">
            <img src={prod1} className="h-full w-full z-1 object-contain"></img>
          </div>
          <div className="mt-16">
            <img src={prod2} className="h-full w-full z-1 object-contain"></img>
          </div>
          {/* <div className="h-screen bg-slide-2 bg-scroll bg-cover mt-p4"></div> */}
        </Carousel>
      </Layout>
    </div>
  );
}

export default Home;
