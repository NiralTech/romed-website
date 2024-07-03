import Layout from "@/Components/Layout";
import ProductHeading from "@/Components/ProductHeading";

import curelux from "@/assets/tridi/tridi-gui.png";
import GradientLayout from "./GradientLayout";

const Tridi = () => (
  <Layout>
    <GradientLayout>
      <ProductHeading
        image={curelux}
        title={"Tridi"}
        desc={"Diode Laser"}
        content={[
          "Tridi is a diode laser that redefines the realm of hair removal with unparalleled effectiveness and efficiency. Engineered for swift and comprehensive results, this advanced device is designed to remove all types of hair from any part of the human body in a remarkably short time",
          "Tridi emits laser beams at either 755 nm, 808 nm, or a combination of three wavelengths (755 nm, 808 nm, 1064 nm). Tridi is not only powerful but also delivered with precision, ensuring targeted hair removal with optimal energy levels. Furthermore its exceptional skin cooling system guarantees a painless treatment experience for the patient while enabling the operator to save valuable time.",
        ]}
      />

      <div className="grid grid-cols-1 my-20 md:mx-64 px-4 gap-2">
        <div className="text-accent mb-6 text-center md:text-left uppercase">
          <h3 className="text-4xl">Feature</h3>
        </div>
        <ul className=" pl-10">
          <li className="py-2 list-disc">
            11x15 mm spot size ensuring efficient treatment over a broad surface
            area
          </li>
          <li className="py-2 list-disc">
            Rapid repetition rate of up to 15 Hz contributing to a quick and
            streamlined process
          </li>
          <li className="py-2 list-disc">
            The highly stable and top-quality 808 nm diode laser minimizing
            thermal damage and discomfort
          </li>
          <li className="py-2 list-disc">
            Utilization of the crystal tip with excellent cooling system (upto
            1˚C) safeguarding patients from pain as well as providing a
            comfortable experience
          </li>
          <li className="py-2 list-disc">
            Consistent energy delivery up to 100J/cm2 with a versatile range of
            pulse durations ranging from 5 to 800ms for satisfactory clinical
            result
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:mx-6 my-20">
        <div className="col-span-2">
          <h3 className="text-accent text-4xl mb-6 uppercase text-center ">
            Technical Specifications
          </h3>
        </div>
        <div className="tb-col">Laser Type</div>
        <div className="tb-col">Diode Laser</div>
        <div className="tb-col">WAVELENGTHS</div>
        <div className="tb-col">755nm, 808nm, 940nm, 1064nm</div>
        <div className="tb-col">Fluence</div>

        <div className="tb-col">5~80J/cm?</div>
        <div className="tb-col">Spot Size</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>12.5*14.5mm</span>
          <span>13.5*28.5mm</span>
          <span>Round 8.25mm</span>
          <span>13.5*38.5mm(Optioanl)</span>
        </div>
        <div className="tb-col">Handle Power</div>

        <div className="tb-col">1800W</div>

        <div className="tb-col">Frequency</div>
        <div className="tb-col">1~10Hz</div>
        <div className="tb-col">Peak Power</div>
        <div className="tb-col">4500W</div>
        <div className="tb-col">Cooling</div>
        <div className="tb-col">
          TEC, air cooling, water cooling, semiconductor cooling
        </div>
        <div className="tb-col">Handpiece Cooling</div>
        <div className="tb-col">-16c</div>
        <div className="tb-col">Display</div>
        <div className="tb-col">12 Inch multi color touch screen</div>
      </div>
    </GradientLayout>
  </Layout>
);

export default Tridi;
