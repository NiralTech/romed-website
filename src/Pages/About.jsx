import Header from "../Components/Header";
import aboutUsSvg from "../assets/about-us.svg";

function About() {
  return (
    <div className="h-screen">
      <Header />
      <div className="md:mt-20">
        <div className="absolute top-0 h-screen -z-10">
          <img
            src={aboutUsSvg}
            alt=""
            className="object-cover h-screen lg:h-auto md:w-full"
          />
        </div>
        <div className="flex-col space-y-5 pt-32 text-link pr-10 pl-10 lg:pl-[55%] flex">
          <p className="md:indent-8">
            <span className="font-bold">ROSCH MEDICAL SYSTEM (P)</span> Ltd is pioneer manufacturing medical and
            aesthetic lasers for skin and aesthetic departments. The company /
            ROSCH is situated in Bangalore, India and it has integrated R&D,
            production, sales and services. Since, its establishments.
          </p>
          <p>
            ROSCH has been committed to serve the customers with high quality,
            particularly in the specialized sectors of hair removal, skin
            rejuvenation and advanced body contouring techniques. The products
            offered by ROSCH is exemplifies their dedication to non-invasive
            high efficiency treatments modalities that emphasize minimized
            recovery period which enhances the patient comfort and satisfaction.
            The state-of-the-art technique meticulously engineered to meet the
            customer demands at affordable prices.
          </p>
          <p>
            ROSCH MEDICAL SYSTEM (P) Ltd completely understood the varying needs
            of its customer and created a broad range of products with unique
            technique which dedicated to treat wide range of indications in the
            aesthetic department. This versatility enables the customer to
            choose the best solution that to grow and expand their practices /
            business.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
