import Header from "../Components/Header";
import Footer from "../Components/Footer";
import homeImage from "../assets/home-image.jpeg";

function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="h-full">
          <div className="z-30 flex h-screen mt-12 lg:h-auto lg:ml-32">
            <h2 className="flex flex-col justify-center ml-10 space-y-5 lg:mt-40 lg:ml-40">
              <span className="text-6xl font-semibold tracking-wider text-white">
                Revolutionize
              </span>
              <span className="text-6xl font-semibold tracking-wider text-white">
                Enchant
              </span>
              <span className="text-6xl font-semibold tracking-wider text-white">
                Gratification
              </span>
            </h2>
          </div>
          <img
            className="absolute w-full h-full top-20 -z-10"
            src={homeImage}
          ></img>
          <div className="z-40 home-overlay lg:h-96"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
