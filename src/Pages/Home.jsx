import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="h-full">
          <div className="z-30 flex h-screen mt-12 lg:h-auto lg:ml-32">
            <h2 className="flex flex-col justify-center ml-10 lg:mt-40 lg:ml-40">
              <span className="text-white"> Innovate </span>
              <span className="text-white"> Delight </span>
              <span className="text-white"> Satisfaction </span>
            </h2>
          </div>
          <img
            className="absolute object-cover h-full lg:h-auto top-20 -z-10"
            src="https://static.wixstatic.com/media/27400d_330a27d32fab47d9b9a1bbe903f21b7b~mv2.jpg/v1/fill/w_1899,h_904,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_330a27d32fab47d9b9a1bbe903f21b7b~mv2.jpg"
          ></img>
          <div className="z-40 home-overlay lg:h-96"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
