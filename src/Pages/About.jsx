import Header from "../Components/Header";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="h-full mt-20">
        <div className="flex flex-col px-5 space-y-5 lg:px-72">
          <h2 className="text-center">ABOUT ROSCH (from IDS)</h2>

          <div className="flex flex-col space-y-5">
            <p>
              Our company, ROSCH, is a company deeply dedicated to ensuring the
              highest level of customer satisfaction. We take pride in our
              position as a global leader in the manufacturing of cutting-edge
              medical devices designed for a wide range of applications. Our
              expertise and specialization extend to the production of versatile
              laser devices that find applications in the fields of dermatology,
              aesthetics, surgery, dentistry, cosmetics, and veterinary care.
            </p>
            <p>
              Over the years, our unwavering commitment to innovation has
              allowed us to tailor our technology to meet the unique needs of
              our customers. As a result, we have expanded our reach, exporting
              our high-quality dermatologic, aesthetic, surgical, dental,
              cosmetic, and veterinary devices to more than 45 countries
              worldwide.
            </p>
            <p>
              Our driving enthusiasm is encapsulated in our company slogan:
              "Innovation for Better Life." We are dedicated to pushing the
              boundaries of what is possible, continually striving to improve
              the lives of individuals and communities around the world through
              our advanced medical device and solutions.
            </p>
            <p>
              We look forward to growing alongside our valued global partners
              and customers, making a positive impact through innovation, and
              contributing to a better quality of life for all.
            </p>
          </div>
        </div>

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
