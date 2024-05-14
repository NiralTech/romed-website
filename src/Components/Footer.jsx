const Footer = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between max-h-full pt-5 pl-10 text-sm text-white bg-black lg:flex-row lg:px-72">
        <div className="flex flex-col justify-end space-y-5">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-1 ">
              <img
                src="https://static.wixstatic.com/media/27400d_7229eed52eb445d9af8b05ae0dfb9b9d~mv2.png/v1/fill/w_33,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_7229eed52eb445d9af8b05ae0dfb9b9d~mv2.png"
                alt=""
              />
              <p>www.roshmed.com</p>
            </div>
            <div className="flex items-center space-x-1">
              <img
                src="https://static.wixstatic.com/media/27400d_c966b42b64384bc6b7b2dc3bb5d3f252~mv2.png/v1/fill/w_33,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_c966b42b64384bc6b7b2dc3bb5d3f252~mv2.png"
                alt=""
              />
              <p>roschmedi@gmail.com</p>
            </div>
            <div className="flex items-center space-x-1">
              <img
                src="https://static.wixstatic.com/media/27400d_c84c57a049d14aed9276027ec56095ff~mv2.png/v1/fill/w_33,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_c84c57a049d14aed9276027ec56095ff~mv2.png"
                alt=""
              />
              <p>9663377055 / 9035846814</p>
            </div>
          </div>
          <div className="flex space-x-5 ">
            <div>
              <img
                src="https://static.wixstatic.com/media/27400d_53f5b3d709704dd081b7da1d7a0439d3~mv2.png/v1/fill/w_33,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_53f5b3d709704dd081b7da1d7a0439d3~mv2.png"
                alt=""
              />
            </div>
            <p className="flex flex-col">
              <span>No. 38, Giridhanwa, 60 Feet Main Road,</span>
              <span>Karnataka Employee D Group Layout, </span>
              <span> Lingadheeranahalli, Andhrahalli Main Road,</span>
              <span>Bengaluru, Bengaluru Urban, </span>
              <span>Karnataka, 560091</span>
            </p>
          </div>
          <div className="flex items-center space-x-5">
            {/* <img
              src="https://static.wixstatic.com/media/27400d_53f5b3d709704dd081b7da1d7a0439d3~mv2.png/v1/fill/w_33,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_53f5b3d709704dd081b7da1d7a0439d3~mv2.png"
              alt=""
            /> */}
            <p>Privacy Policy</p>
          </div>
          <div className="flex items-center space-x-5 ">
            {/* <img
              src="https://static.wixstatic.com/media/27400d_53f5b3d709704dd081b7da1d7a0439d3~mv2.png/v1/fill/w_33,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_53f5b3d709704dd081b7da1d7a0439d3~mv2.png"
              alt=""
            /> */}
            <p>Reserved by Roschmed</p>
          </div>
        </div>

        <div className="flex justify-end items-end w-[370px]">
          <img
            src="https://static.wixstatic.com/media/27400d_6caac1c4025a43d5a1ef321e55eff644~mv2.png/v1/crop/x_0,y_0,w_941,h_2048/fill/w_111,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_6caac1c4025a43d5a1ef321e55eff644~mv2.png"
            alt=""
            style={{ width: "89px", height: "191px" }}
          />
          <img
            src="https://static.wixstatic.com/media/27400d_2663e75849684caa9fbd47000714923d~mv2.png/v1/crop/x_0,y_0,w_1118,h_2512/fill/w_166,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_2663e75849684caa9fbd47000714923d~mv2.png"
            alt=""
            style={{ width: "133spx", height: "300px" }}
          />
          <img
            src="https://static.wixstatic.com/media/27400d_b08d90f5b951492284bb41faa84dd160~mv2.png/v1/crop/x_0,y_32,w_1036,h_2549/fill/w_185,h_451,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27400d_b08d90f5b951492284bb41faa84dd160~mv2.png"
            alt=""
            style={{ width: "148px", height: "361px" }}
            width="148"
            height="361"
            fetchpriority="high"
          />
        </div>
      </div>
      <img
        className="fixed bottom-5 right-5 w-14 h-14"
        src="https://static.wixstatic.com/media/27400d_a1b89019da544633af7956517d82b7e8~mv2.png/v1/fill/w_69,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pngimg_com%20-%20whatsapp_PNG22.png"
        alt=""
      />
    </>
  );
};

export default Footer;
