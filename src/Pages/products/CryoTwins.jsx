import ProductHeading from "@/Components/ProductHeading";

import cryo from "@/assets/cryotwins/cryo.png";
import GradientLayout from "../../Components/GradientLayout";

const CryoTwins = () => (
  <GradientLayout>
    <ProductHeading
      image={cryo}
      title={"CRYO-ZET & CRYO-Q"}
      desc={"AIR COOLING SYSTEM"}
      content={[
        "CRYO-ZET is an air-cooling device designed to be used with lasers during dermatological procedures. It minimizes skin damage through compatibility with various lasers, reduces pain and recovery time, and ensures even skin protection through its advanced cooling capabilities. With the capability to chill the air to a maximum of -35 degrees Celsius, it delivers a robust cooling effect both during and after laser treatments. Notably, CRYO-ZET operates without the need for consumables, ensuring cost-effectiveness, simplicity, and           convenience in its usage.",
      ]}
    />

    <div className="grid grid-cols-1 my-20 md:mx-64 px-4 gap-2">
      <div className="mb-6 text-center md:text-left uppercase">
        <h3 className="text-4xl">Feature</h3>
      </div>
      <ul className=" pl-10">
        <li className="py-2 list-disc">Air flow controlling system</li>
        <li className="py-2 list-disc">
          Cooling air temperature (max. -35 degrees)
        </li>
        <li className="py-2 list-disc">
          Rapid cooling with high-quality compressor
        </li>
        <li className="py-2 list-disc">Auto-adjustable controlling system</li>
        <li className="py-2 list-disc">
          Auto-detecting system to maintain optimal conditions
        </li>
      </ul>
    </div>

    <div className="grid grid-cols-2 md:mx-6 my-20">
      <div className="col-span-2">
        <h3 className="text-white text-4xl mb-6 uppercase text-center ">
          Technical Specifications
        </h3>
      </div>
      <div className="tb-col">AC INPUT</div>
      <div className="tb-col">220-240 V / 50-60 Hz</div>
      <div className="tb-col">AIR LEVEL</div>
      <div className="tb-col">10 Step</div>
      <div className="tb-col">AIR FLOW OUTPUT</div>
      <div className="tb-col">1000L / min</div>
      <div className="tb-col">TEMPERATURE</div>
      <div className="tb-col">0 t0 -35°C</div>
      <div className="tb-col">DIMENSIONS (W’L’H)</div>
      <div className="tb-col">400mm (W) X 610 mm (L) X 963 mm (H)</div>
      <div className="tb-col">WEIGHT</div>
      <div className="tb-col">50 kg</div>
    </div>
  </GradientLayout>
);

export default CryoTwins;
