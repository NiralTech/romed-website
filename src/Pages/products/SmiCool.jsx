import ProductHeading from "@/Components/ProductHeading";

import smiCool from "@/assets/smicool/smi-cool-1.png";
import GradientLayout from "../../Components/GradientLayout";

const SmiCool = () => (
  <GradientLayout>
    <ProductHeading
      image={smiCool}
      title={"SMI Cool"}
      desc={"Cryolipolysis"}
      content={[
        `SMI COOL is a cryolipolysis device designed to redefine the
            landscape of non-invasive fat removal. Engineered with precision and
            innovation, SMI COOL offers a great solution for individuals seeking
            a safe and effective method to sculpt their bodies without surgery.`,
        `Harnessing the power of controlled cooling technology, this device
            selectively targets and reduces stubborn fat deposits, providing
            clients with a non-surgical alternative to traditional liposuction.
            With its advanced features and user-friendly interface, SMI COOL
            ensures a comfortable and personalized experience, making it a
            versatile and reliable choice for both practitioners and clients
            alike.`,
      ]}
    />

    <div className="grid grid-cols-1 my-20 md:mx-64 px-4 gap-2">
      <div className="mb-6 text-center md:text-left uppercase">
        <h3 className="text-4xl">Feature</h3>
      </div>
      <ul className=" pl-10">
        <li className="py-2 list-disc">
          Four different sizes of handpieces for easy and effective treatment
          across the entire body
        </li>
        <li className="py-2 list-disc">
          Cost saving and reduced treatment time by virtue of four handpiece
          that can work simultaneously
        </li>
        <li className="py-2 list-disc">
          Superior cooling system ensuring that the treatment temperature
          reaches a minimum of -15→5℃, maximizing the effectiveness of
          Cryolipolysis
        </li>
        <li className="py-2 list-disc">
          Non-surgical and minimal downtime that allows patients can return to
          their regular activities immediately after treatment
        </li>
        <li className="py-2 list-disc">
          Easily intelligible and humanized operation, minimizing any associated
          risks
        </li>
        <li className="py-2 list-disc">
          Variety of accessories enhancing its versatility for different
          treatment options
        </li>
        <li className="py-2 list-disc">
          Elegant design with advanced technology
        </li>
        <li className="py-2 list-disc">
          User-friendly operation, ensures easy operation for all programs,
          making it accessible for both practitioners and patients
        </li>
      </ul>
    </div>

    <div className="grid grid-cols-2 md:mx-6 my-20">
      <div className="col-span-2">
        <h3 className="text-white text-4xl mb-6 uppercase text-center ">
          Technical Specifications
        </h3>
      </div>
      <div className="tb-col">HANDLES</div>
      <div className="tb-col">4 handles (1large, 2medium, 1small)</div>
      <div className="tb-col">HANDLE SCREEN</div>
      <div className="tb-col">5-inch touch screen</div>
      <div className="tb-col">VACCUM INTENSITY</div>
      <div className="tb-col">VACCUM INTENSITY 0-100 Pa adjustable</div>
      <div className="tb-col">HANDLE SIZES</div>
      <div className="flex flex-col space-y-2 tb-col">
        <span>Large:200x76x125mm</span>
        <span>Medium: 160x56x65mm</span>
        <span>Small: 125x45x70mm</span>
      </div>
      <div className="tb-col">MACHINE SCREEN</div>

      <div className="tb-col">10.4-inch touch screen</div>
      <div className="tb-col">COOLING TEMPERATURE</div>
      <div className="tb-col">-155 °C</div>
      <div className="tb-col">COOLING SYSTEM</div>
      <div className="tb-col">
        Water, air, semi-conductor triple cooling system
      </div>
      <div className="tb-col">INPUT POWER</div>
      <div className="tb-col">2500 W</div>
      <div className="tb-col">OUTPUT POWER</div>
      <div className="tb-col">1600 W</div>
      <div className="tb-col">ELECTRICAL REQUIREMENT</div>
      <div className="tb-col">AC 220V±10% A 50Hz, 110V ± 10% 10 A 60Hz</div>
      <div className="tb-col">DIMENSION (W’L’H)</div>
      <div className="tb-col">450mm (W) X 420mm (L) X 1230mm (H)</div>
      <div className="tb-col">WEIGHT</div>
      <div className="tb-col">70 Kg</div>
    </div>
  </GradientLayout>
);

export default SmiCool;
