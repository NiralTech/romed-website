import {
  FaPhone,
  FaLocationDot,
  FaEnvelope,
  FaCopyright,
  FaShieldHalved,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  const icon_size = "1.5em";
  return (
    <>
      <div className="flex flex-col md:flex-row justify-left pl-6 md:pl-20 space-x-6 w-full text-sm py-10 mt-10  text-accent">
        <div className="flex flex-col space-y-2 md:space-y-3">
          <div className="flex flex-col md:flex-row space-y-2 md:space-x-4">
            <div className="flex space-x-4 items-center md:items-start md:mt-1">
              <TbWorldWww size={icon_size} />
              <p>www.roshmed.com</p>
            </div>
            <div className="flex space-x-4 items-center md:items-start md:justify-center">
              <FaEnvelope size={icon_size} />
              <p>roschmedi@gmail.com</p>
            </div>

            <div className="flex space-x-4 items-center md:items-start md:justify-center">
              <FaPhone size={icon_size} />
              <p>9663377055 / 9035846814</p>
            </div>
          </div>

          <div className="flex space-x-4 items-center">
            <FaLocationDot size={icon_size} />
            <p className="flex flex-col space-y-1">
              <span>
                No. 38, Giridhanwa, 60 Feet Main Road, Karnataka Employee D
                Group Layout,
              </span>
              <span>
                Lingadheeranahalli, Andhrahalli Main Road, Bengaluru, Bengaluru
                Urban,Karnataka, 560091
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaShieldHalved />
            <p className="pl-1">Privacy Policy</p>
            <a href="https://twitter.com/RoschLasers" target="_blank">
              <FaFacebook size={icon_size} className="cursor-pointer" />
            </a>
            {/* <FaYoutube size={icon_size} className="cursor-pointer" /> */}
            <a href="https://twitter.com/RoschLasers" target="_blank">
              <FaTwitter size={icon_size} className="cursor-pointer" />
            </a>
          </div>
          <div className="flex items-center space-x-3 ">
            <FaCopyright size={icon_size} />
            <p>Reserved by Roschmed</p>
          </div>
        </div>
      </div>

      <a
        className="fixed bottom-5 right-5"
        href="https://api.whatsapp.com/send?phone=9663377055"
        target="_blank"
      >
        <FaWhatsapp size={"3.5em"} className="cursor-pointer text-accent bg-white rounded-full" />
      </a>
    </>
  );
};

export default Footer;
