import ProductHeading from "@/Components/ProductHeading";

import ds3000 from "@/assets/ds3000/ds3000-1.png";
import GradientLayout from "../../Components/GradientLayout";

const Ds3000 = () => (
  <GradientLayout>
    <ProductHeading
      image={ds3000}
      title={"DS-3000E"}
      desc={"Smoke Evacuator"}
      content={[
        `DS-3000E are smoke evacuators specifically crafted for laser
          treatments, aiming to eliminate smoke and odours and thereby reduce
          indoor air contamination during treatment procedures.`,
        `Their efficient filters, including dust, carbon, ULPA, or HEPA, make
          it possible to create a bacterium- and virus-free operational
          environment by minimizing the presence of these contaminants in the
          air. Easy to operate and portable, these devices can be conveniently
          moved to any location within the treatment environment.`,
      ]}
    />

    <div className="grid grid-cols-1 my-20 md:mx-64 px-4 gap-2">
      <div className="mb-6 text-center md:text-left uppercase">
        <h3 className="text-4xl">Feature</h3>
      </div>
      <ul className=" pl-10">
        <li className="py-2 list-disc">
          Adjustable suction power based on smoke quantities
        </li>
        <li className="py-2 list-disc">
          Low-noise evacuation of smoke and odours
        </li>
        <li className="py-2 list-disc">
          Variable speed control for procedural airflow and suction adjustments
        </li>
        <li className="py-2 list-disc">
          Perfect elimination of bacteria and viruses in smoke
        </li>
        <li className="py-2 list-disc">
          Three-stage filtration: dust filter, carbon filter, ULPA or HEPA
          filter
        </li>
        <li className="py-2 list-disc">
          Convenient one-touch activation with foot-switch
        </li>
        <li className="py-2 list-disc">
          Equipped with advanced medical casters for easy and convenient
          movement
        </li>
        <li className="py-2 list-disc">
          UV LED feature for enhanced performance
        </li>
      </ul>
    </div>

    <div className="grid grid-cols-2 md:mx-6 my-20">
      <div className="col-span-2">
        <h3 className="text-white text-4xl mb-6 uppercase text-center ">
          Technical Specifications
        </h3>
      </div>
      <div className="tb-col">MODEL NAME</div>
      <div className="tb-col">DS-3000E</div>
      <div className="tb-col">DIMENSION (W’L’H)</div>
      <div className="tb-col">300mm (W) X 320mm (L) X 720mm (H)</div>
      <div className="tb-col">POWER SUPPLY</div>
      <div className="flex flex-col space-y-2 tb-col">
        <span>Single phase AC 200 V-240 V / 50-60 Hz</span>
        <span>100 V – 130 V / 50-60 Hz</span>
      </div>

      <div className="tb-col">AIR FLOW</div>
      <div className="tb-col">3.9m / 3 min</div>
      <div className="tb-col">AIR PRESSURE</div>

      <div className="tb-col">
        3.0 Kpa (Ø40) / 10 Kpa (Ø25) / 22.5 Kpa (Ø10)
      </div>

      <div className="tb-col">FILTER</div>
      <div className="flex flex-col space-y-2 tb-col">
        <span>1st filter (dust filter)</span>
        <span>2nd (ulpa /heap filter)</span>
        <span>3rd (carbon filter)</span>
      </div>

      <div className="tb-col">NOISE LEVEL</div>
      <div className="tb-col">Approx, 49-65 db.</div>
      <div className="tb-col">FREE ARM SIZE</div>
      <div className="tb-col">1,600mm</div>
      <div className="tb-col">FREE ARM WEIGHT</div>
      <div className="tb-col">3.9m / 3 min</div>
      <div className="tb-col">CONTROL MODE</div>
      <div className="tb-col">Step 0-9 (10 steps)</div>
      <div className="tb-col">BASIC COMPONENTS</div>
      <div className="tb-col">Main body, 3 joint free arm, power cord</div>
    </div>
  </GradientLayout>
);

export default Ds3000;
