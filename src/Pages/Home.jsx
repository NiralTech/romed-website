import Layout from "@/Components/Layout";

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
          <div className="h-screen bg-slide-1 bg-scroll bg-cover mt-p4"></div>
          <div className="h-screen bg-slide-2 bg-scroll bg-cover mt-p4"></div>
        </Carousel>
      </Layout>
    </div>
  );
}

export default Home;
