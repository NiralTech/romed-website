import Layout from "../Components/Layout";

import titan from "../assets/titan/titan.png";
import mirobram from "../assets/titan/mirobeam.png";
import gynecology from "../assets/titan/gynecology.png";
import indication from "../assets/titan/titan-indication.png";

const Titan = () => (
  <Layout>
    <div className="flex flex-col mt-24 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
        <div className="md:row-span-2">
          <img className="content-center h-full w-full" src={titan} alt="" />
        </div>
        <div className="text-accent mb-6 text-center md:text-left uppercase">
          <h3 className="text-4xl">Titan</h3>
          <p className="my-6">Fractional CO2</p>
        </div>
        <div className="flex flex-col space-y-4">
          <p>
            TITAN, the pinnacle of CO2 fractional laser technology by ROSCH is a
            groundbreaking system designed to address a diverse range of
            concerns.
          </p>
          <p>
            With its innovative approach and precision engineering, TITAN
            redefines the landscape of mainly 6 different aesthetic and medical
            applications, offering unparalleled efficacy and
            versatility—aesthetic surgical, aesthetic fractional, general
            fractional, vaginal, dental, and ENT.
          </p>
          <p>
            For each application, SMAXEL is equipped with features that optimize
            treatment outcomes, and its prowess lies in its ability to minimize
            downtime while maximizing results. TITAN is truly a go-to choose for
            aesthetic and medical practitioners.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
        <div className="text-accent mb-6 text-center md:text-left uppercase col-span-2">
          <h3 className="text-4xl">Scar treatment by fractional CO2 laser</h3>
        </div>
        <div>
          <img className="content-center h-full w-full" src={mirobram} alt="" />
        </div>
        <p>
          The fractional CO2 laser emits a concentrated beam of light that is
          fractionated into thousands of tiny microbeams. These microbeams
          penetrate into the deep skin, creating controlled columns of both
          vaporized and coagulated zones that stimulate the production of new
          collagen and elastin fibres. As a result, the damaged skin cells are
          replaced by new, healthier tissue, and eventually appearance of scars
          is improved over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
        <div className="text-accent mb-6 text-center md:text-left uppercase md:col-span-2">
          <h3 className="text-4xl">
            Vaginal rejuvenation by fractional CO2 laser
          </h3>
        </div>
        <p>
          Similar to scar treatment, the fractional CO2 laser treatments for
          vaginal rejuvenation utilize a similar principle, but the target and
          effects are specific to the vaginal tissue. The fractional CO2 laser
          emits a concentrated beam of light that is fractionated into thousands
          of tiny microbeams. These microbeams penetrate into vaginal tissues,
          creating controlled columns of both vaporized and coagulated zones
          that trigger a healing process in the tissue, stimulating the
          production of new collagen, elastin fibres, and vascularization in the
          vaginal wall. This results in enhancing the strength and elasticity of
          the vaginal tissue, eventually leading to improvements in vaginal
          laxity, elasticity, and moisture levels. Over the weeks following the
          treatment, patients may notice improvements in vaginal tightness,
          lubrication, and overall tissue health.
        </p>
        <div className="md:row-span-2 w-96 h-96">
          <img
            className="content-center h-full w-full"
            src={gynecology}
            alt=""
          />
        </div>
      </div>

      <div className="grid  md:mx-64 my-20 gap-4">
        <div>
          <h3 className="text-accent text-4xl mb-6 uppercase text-center">
            Indication
          </h3>
        </div>

        <div className="gap-2">
          <img className="content-center bg-primary" src={indication} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:mx-6 my-20">
        <div className="col-span-2">
          <h3 className="text-accent text-4xl mb-6 uppercase text-center ">
            Technical Specifications
          </h3>
        </div>
        <div className="tb-col">LASER MEDIUM</div>
        <div className="tb-col">CO2</div>
        <div className="tb-col">WAVELENGTH</div>
        <div className="tb-col">10,600 nm</div>
        <div className="tb-col">GUIDE BEAM</div>

        <div className="tb-col">650 nm &lt; 5mW</div>
        <div className="tb-col">POWER</div>
        <div className="tb-col">1-40 W</div>
        <div className="tb-col">AIMING BEAM</div>
        <div className="tb-col">Diode 650nm</div>
        <div className="tb-col">COOLING</div>
        <div className="tb-col">Water</div>
        <div className="tb-col">DIMENSION (W’L’H)</div>
        <div className="tb-col">440mm(W) X 480mm(L) X 1055mm(H)</div>
        <div className="tb-col">WEIGHT</div>
        <div className="tb-col">52Kg</div>
      </div>

      <div className="grid grid-cols-2 md:mx-6 my-20">
        <div className="tb-col">HANDPIECES</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>50mm/ 100mm (Standard)</span>
          <span>Dental/ ENT / (Optional)</span>
        </div>
        <div className="tb-col">OPERATION MODE</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>CW/Normal pulse/ Super pulse</span>
          <span>Super pulse continuous/Ultra Pulse</span>
          <span>Smart Protocol (general surgery/ dental surgery)</span>
        </div>
        <div className="tb-col">PULSE DURATION</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>Continuous 2-30ms</span>
          <span>Ultra Pulse 90-900µs</span>
          <span>Super pulse 1.0-4.0ms</span>
          <span>Normal pulse 9-20ms</span>
        </div>
        <div className="tb-col">REPEAT TIME</div>
        <div className="tb-col">
          Off, 2/500ms adjustable, 5ms, 10ms, 30ms, 50ms, 70ms, 100ms, 250ms,
          500ms
        </div>
      </div>

      <div className="grid grid-cols-2 md:mx-6 my-20">
        <div className="tb-col">BEAM MODE</div>
        <div className="tb-col">Ultra pulse</div>
        <div className="tb-col">DENSITY LEVEL</div>
        <div className="tb-col">1-23 steps (x, y line);9-4489 dots</div>
        <div className="tb-col">OPERATION MODE</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>Fractional mode</span>
          <span>Low Pain Fractional mode</span>
        </div>

        <div className="tb-col">BEAM PATTERN</div>
        <div className="tb-col">Array, Grid, Random</div>
        <div className="tb-col">BEAM SHAPE</div>
        <div className="tb-col">Square, Triangle, Octagon, Circle</div>
        <div className="tb-col">DEPTH LEVEL</div>
        <div className="tb-col">1-5 steps</div>
        <div className="tb-col">HANDPIECE</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>Fractional HP (Galvanic motor)</span>
          <span>Vaginal Rejuvenation HP (Optional)</span>
        </div>
        <div className="tb-col">REPEAT TIME</div>
        <div className="tb-col">Off, 0.5, 1, 1.5, 2, 2.5 ms</div>
      </div>
    </div>
  </Layout>
);

export default Titan;
