import Layout from "../Components/Layout";

import sonopoint from "../assets/sonopoint/sonopoint.png";
import handpiece from "../assets/sonopoint/handpiece.png";
import tipHandpiece from "../assets/sonopoint/tip-handpiece.png";
import tips1 from "../assets/sonopoint/tips-1.png";
import tips2 from "../assets/sonopoint/tips-2.png";

const Sonopoint = () => (
  <Layout>
    <div className="flex flex-col mt-24 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
        <div className="md:row-span-3 row-start-1">
          <img
            className="content-center h-full w-full"
            src={sonopoint}
            alt=""
          />
        </div>
        <div className="text-accent mb-6 text-center md:text-left uppercase">
          <h3 className="text-4xl">SONOPOINT</h3>
          <p className="my-6">HIFU- High Intensity Focused Ultrasound</p>
        </div>
        <div className="flex flex-col space-y-10">
          <p>
            SONOPOINT is a HIFU device designed for aesthetic purposes, offering
            a versatile approach to non-invasive skin rejuvenation. This
            innovative device is equipped with both a standard handpiece and a
            pen-type handpiece, providing practitioners with flexibility and
            precision to the desired treatment areas.
          </p>
          <p>
            The standard handpiece allows for broad coverage, making it suitable
            for larger facial regions, while the pen-type handpiece offers a
            more detailed and focused application, ideal for intricate facial
            features.
          </p>
          <p>
            SONOPOINT stimulates collagen production and tightens the skin,
            resulting in a firmer and more youthful appearance
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 my-20 md:mx-64 px-4 gap-2">
        <div className="text-accent mb-6 text-center md:text-left uppercase">
          <h3 className="text-4xl">Feature</h3>
        </div>
        <ul className=" pl-10">
          <li className="py-2 list-disc">
            Visible lifting effect without surgery
          </li>
          <li className="py-2 list-disc">
            SMAS layer treatment for comprehensive skin rejuvenation
          </li>
          <li className="py-2 list-disc">
            Safe treatment process with no downtime Immediate lifting effects
            alongside long-term benefits Fast scanning speed
          </li>
          <li className="py-2 list-disc">
            8-inch colour touchscreen for easy operation{" "}
          </li>
          <li className="py-2 list-disc">
            Effortlessly operation with the user-friendly jog dial filter
          </li>
          <li className="py-2 list-disc">
            Instant results with tightened and lifted skin following the
            treatment
          </li>
          <li className="py-2 list-disc">
            Non-invasive procedure that prioritizes safety and effectiveness
          </li>
          <li className="py-2 list-disc">
            Accurate and uniform dot distribution for precision and safety{" "}
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
        <div className="text-accent mb-6 text-center md:text-left uppercase col-span-2">
          <h3 className="text-4xl">Hand Pieces and Tips</h3>
        </div>
        <div>
          <img
            className="content-center h-full w-full bg-primary"
            src={tips1}
            alt=""
          />
        </div>
        <div>
          <img
            className="content-center h-full w-full bg-primary"
            src={tips2}
            alt=""
          />
        </div>
        <div>
          <img
            className="content-center h-full w-full bg-primary"
            src={handpiece}
            alt=""
          />
        </div>
        <div>
          <img
            className="content-center h-full w-full bg-primary"
            src={tipHandpiece}
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:mx-6 my-20">
        <div className="col-span-2">
          <h3 className="text-accent text-4xl mb-6 uppercase text-center ">
            Technical Specifications
          </h3>
        </div>
        <div className="tb-col">HANDPIECE</div>
        <div className="tb-col">Standard HP</div>
        <div className="tb-col">FREQUENCY</div>
        <div className="tb-col">4 MHz, 7MHz</div>
        <div className="tb-col">CARTRIDGE</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>7MHz: 15mm, 3.0mm, 4.5mm for face</span>
          <span>4MHz: 10mm, 13mm (optional) for body and fat</span>
        </div>

        <div className="tb-col">SPACING</div>
        <div className="tb-col">1.0-2.0 mm (0.1mm step) for fat</div>
        <div className="tb-col">POWER LEVEL</div>

        <div className="tb-col">Adjustable 1-10 level</div>
        <div className="tb-col">LENGTH</div>
        <div className="tb-col">Full length: 25mm, 20mm, 15mm</div>
        <div className="tb-col">SPOT SIZE</div>
        <div className="tb-col">&lt; 3mm</div>
        <div className="tb-col">HANDPIECE</div>
        <div className="tb-col">Pen-type HP</div>
        <div className="tb-col">FREQUENCY</div>
        <div className="tb-col">7MHz</div>
        <div className="tb-col">MAX ENERGY</div>
        <div className="tb-col">3.0 J/ cm2</div>
        <div className="tb-col">CARTRIDGE</div>
        <div className="tb-col">7 MHz: 1.5mm, 3.0mm</div>
        <div className="tb-col">POWER LEVEL</div>
        <div className="tb-col">Adjustable 1-10 level</div>
        <div className="tb-col">SPEED</div>
        <div className="tb-col">1-4 shots</div>
      </div>

      <div className="grid grid-cols-2 md:mx-6 my-20">
        <div className="tb-col">ELECTRICAL REQUIREMENTS</div>
        <div className="tb-col">100-240 V 50/60 Hz 1 A 150 VA</div>
        <div className="tb-col">DIMENSIONS (W’L’H)</div>
        <div className="tb-col">500mm(W) X 500mm(L) X 1100mm (H)</div>

        <div className="tb-col">WEIGHT</div>
        <div className="tb-col">30Kg</div>
      </div>
    </div>
  </Layout>
);

export default Sonopoint;
