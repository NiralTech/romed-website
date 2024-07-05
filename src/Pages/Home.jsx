import Layout from "@/Components/Layout";

import picoPremium from "@/assets/pico/pico-premium.png";
import sonopoint from "@/assets/sonopoint/sonopoint.png";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div id="home" className="">
      <Layout>
        <Carousel className="" showArrows={true} autoPlay={true} useKeyboardArrows={true} transitionTime={500}  showThumbs={false} showStatus={false}>
          <div className="h-screen bg-home-img bg-scroll bg-cover mt-p4">
            <div className="h-screen pt-16 lg:h-auto lg:ml-32">
              <h2
                className={`flex flex-col items-start ml-10 space-y-5 mt-28 lg:mt-40 lg:ml-4 w-96`}
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
            </div>
          </div>
          <div className="h-screen from-primary to-black bg-gradient-to-tr bg-scroll bg-cover pt-24">
            <h3 className="text-white text-3xl pt-5 uppercase">Pico Premium</h3>
            <img
              src={picoPremium}
              alt=""
              className="w-full h-3/4 object-contain"
            />
          </div>
          <div className="h-screen  from-primary to-black bg-gradient-to-tr bg-scroll bg-cover pt-24">
            <h3 className="text-white text-3xl pt-5 uppercase">Sonopoint</h3>
            <img
              src={sonopoint}
              alt=""
              className="w-full h-3/4 object-contain"
            />
          </div>
        </Carousel>
      </Layout>
    </div>
  );
}

export default Home;
