import Header from "../Components/Header";

function Home() {
  const myImage = {
    backgroundImage:
      "url('https://static.wixstatic.com/media/27400d_330a27d32fab47d9b9a1bbe903f21b7b~mv2.jpg/v1/fill/w_1899,h_904,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_330a27d32fab47d9b9a1bbe903f21b7b~mv2.jpg')",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const myimage2 = {
    backgroundImage:
      "https://static.wixstatic.com/media/27400d_6caac1c4025a43d5a1ef321e55eff644~mv2.png/v1/crop/x_0,y_0,w_941,h_2048/fill/w_111,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_6caac1c4025a43d5a1ef321e55eff644~mv2.png",
    height: "200px",
    backgroundSize: "cover",
    width: "200px",
  };

  return (
    <>
      <Header />
      <div style={myImage}>
        <div className="flex mt-8">
          <div className="flex flex-col mt-40 justify-center ml-40">
            <h1> Innovate </h1>
            <h1> Delight </h1>
            <h1> Satisfaction </h1>
          </div>
        </div>
      </div>
      <div className=" bg-black" style={myimage2}></div>
      <div className="">
        <div></div>
      </div>
    </>
  );
}

export default Home;
