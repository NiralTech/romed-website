import GradientLayout from "@/Components/GradientLayout";
import ProductHeading from "@/Components/ProductHeading";

import inpure from "@/assets/inpure/inpure_pic.png";
import indication from "@/assets/inpure/indication.png";

const Inpure = () => (
  <GradientLayout>
    <ProductHeading
      image={inpure}
      title={"Inpure"}
      desc={"AquaPeel & Hydrogen & Water Galvanic"}
      content={[
        "Aesthetic device for professional use physical peeling with water pressure, hydrogen water with small cluster, galvanic energy for permeation. Specialized water-Galvanic, Hydrogenated water peeling replenishes moisture to dry skin 1 single treatment, Instant relief, Shining effect and Face roller lifting for elasticity improvement at the last step.",
      ]}
    ></ProductHeading>

    {/* <div className="grid grid-cols-1 md:grid-cols-2 md:mx-64 my-20 gap-4 px-4">
      <div className="md:col-span-2">
        <h3 className="text-white text-4xl mb-6 text-center md:text-left uppercase">
          {"Hydrogen water deep cleansing"}
        </h3>
      </div>
      <p>
        Electrolyzed hydrogen water has a smaller cluster than regular water.
        Hydrogen water hydration enables effective, low irritating peeling
        through waste dissolving.
      </p>
      <div className="gap-2 ">
        <img className="h-full w-full" src={picoPulse} alt="" />
      </div>
    </div> */}

    <div className="grid grid-cols-2 md:mx-6 my-20">
      <div className="col-span-2">
        <h3 className="text-white text-4xl mb-6 uppercase text-center ">
          Technical Specifications
        </h3>
      </div>
      <div className="tb-col">Pressure</div>
      <div className="tb-col">Max, 600mmhg +/- 10%</div>
      <div className="tb-col">Peeling Handpiece</div>
      <div className="tb-col">4.5V - 14.5V +/- 10%</div>
      <div className="tb-col">Galvanic Roller</div>
      <div className="tb-col">1V = 3V +/- 10%</div>
      <div className="tb-col">Input</div>
      <div className="tb-col">100 - 240V, 50/60Hz</div>
      <div className="tb-col">Output</div>
      <div className="tb-col">12V 7.5A</div>
      <div className="tb-col">Power Consumption</div>
      <div className="tb-col">60W</div>
      <div className="tb-col">Dimension</div>
      <div className="tb-col">680 * 550 * 1170mm (W * D * H)</div>
      <div className="tb-col">Weight</div>
      <div className="tb-col">30Kg / 1 SET</div>
    </div>

    <div className="grid  md:mx-64 my-20 gap-4">
      <div>
        <h3 className="text-white text-4xl mb-6 uppercase text-center">
          Indication
        </h3>
      </div>

      <div className="gap-2">
        <img className="content-center" src={indication} alt="" />
      </div>
    </div>
  </GradientLayout>
);

export default Inpure;
