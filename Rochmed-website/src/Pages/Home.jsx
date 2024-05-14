import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="h-full">
          <div className="flex mt-12 lg:ml-32 z-30">
            <h2 className="flex flex-col mt-20 lg:mt-40 justify-center ml-40">
              <span className="text-white"> Innovate </span>
              <span className="text-white"> Delight </span>
              <span className="text-white"> Satisfaction </span>
            </h2>
          </div>
          <img
            className="absolute top-20 -z-10"
            src="https://static.wixstatic.com/media/27400d_330a27d32fab47d9b9a1bbe903f21b7b~mv2.jpg/v1/fill/w_1899,h_904,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_330a27d32fab47d9b9a1bbe903f21b7b~mv2.jpg"
          ></img>
          <div className="home-overlay z-40 h-96"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
