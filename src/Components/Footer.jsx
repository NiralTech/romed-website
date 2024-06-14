import {
  FaPhone,
  FaLocationDot,
  FaEnvelope,
  FaCopyright,
  FaShieldHalved,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-left pl-6 md:pl-20 space-x-6 w-full text-sm py-10 mt-10">
        <div className="flex flex-col space-y-2 md:space-y-3">
          <div className="flex flex-col md:flex-row space-y-2 md:space-x-4">
            <div className="flex space-x-4 items-center md:items-start md:mt-1">
              <TbWorldWww />
              <p>www.roshmed.com</p>
            </div>
            <div className="flex space-x-4 items-center md:items-start md:justify-center">
              <FaEnvelope />
              <p>roschmedi@gmail.com</p>
            </div>

            <div className="flex space-x-4 items-center md:items-start md:justify-center">
              <FaPhone />
              <p>9663377055 / 9035846814</p>
            </div>
          </div>

          <div className="flex space-x-4 items-center">
            <FaLocationDot />
            <p className="flex flex-col">
              <span>No. 38, Giridhanwa, 60 Feet Main Road,</span>
              <span>Karnataka Employee D Group Layout, </span>
              <span> Lingadheeranahalli, Andhrahalli Main Road,</span>
              <span>Bengaluru, Bengaluru Urban, </span>
              <span>Karnataka, 560091</span>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaShieldHalved />
            <p>Privacy Policy</p>
            <FaFacebook className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
          <div className="flex items-center space-x-3 ">
            <FaCopyright />
            <p>Reserved by Roschmed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
