import Header from "../Components/Header";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="h-full mt-20">
        <div className="flex flex-col px-5 space-y-5 lg:px-72">
          <h2 className="text-center">ABOUT US</h2>

          <div className="flex flex-col space-y-5">
            <p>
              ROSCH MEDICAL SYSTEM (P) Ltd is pioneer manufacturing medical and
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
              recovery period which enhances the patient comfort and
              satisfaction. The state-of-the-art technique meticulously
              engineered to meet the customer demands at affordable prices.
            </p>
            <p>
              ROSCH MEDICAL SYSTEM (P) Ltd completely understood the varying
              needs of its customer and created a broad range of products with
              unique technique which dedicated to treat wide range of
              indications in the aesthetic department. This versatility enables
              the customer to choose the best solution that to grow and expand
              their practices / business.
            </p>
          </div>
        </div>
        <div className="z-40 home-overlay lg:h-96"></div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
