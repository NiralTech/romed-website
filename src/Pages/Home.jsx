import Header from "../Components/Header";
import Footer from "../Components/Footer";

import homeSvg from "../assets/home.svg";

function Home() {
  return (
    <>
      <div id="home" className="bg-home-img bg-scroll bg-cover">
        <Header />
        {/* <div className="absolute top-0 h-screen -z-10">
          <img
            src={homeSvg}
            alt=""
            className="object-cover h-screen lg:h-auto md:w-full"
          />
        </div> */}
        <div className="h-screen">
          <div className="z-30 h-screen pt-16 lg:h-auto lg:ml-32">
            <h2 className="flex flex-col justify-center ml-10 space-y-5 mt-28 lg:mt-40 lg:ml-40">
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
        <Footer />
      </div>
    </>
  );
}

export default Home;
