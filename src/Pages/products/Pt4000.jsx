import pt4000 from "@/assets/pt-4000/pt-4000.png";
import indication from "@/assets/pt-4000/pt4000-Indication.png";
import laser from "@/assets/pt-4000/laser-vs-fractional-rf.png";
import penetration from "@/assets/pt-4000/penetration-depth.png";
import noninsulated from "@/assets/pt-4000/non-insulated vs insulated.png";
import downtime from "@/assets/pt-4000/downtime.png";
import tip1 from "@/assets/pt-4000/pt-tips.png";
import tip2 from "@/assets/pt-4000/pt-tips2.png";
import ProductHeading from "@/Components/ProductHeading";
import GradientLayout from "../../Components/GradientLayout";

const Pt4000 = () => (
    <GradientLayout>
      <ProductHeading
        image={pt4000}
        title={"PT-4000"}
        desc={"RF NEEDLE"}
        content={[
          `PT-4000 is a groundbreaking fractional radiofrequency micro-needle
            device, innovatively designed to overcome the drawbacks associated
            with traditional lasers that can potentially damage the skin surface
            as they invariably penetrate through it.`,
          `Differentiating itself, PT-4000 employs insulated micro-needles that
            penetrate the dermis directly, delivering optimal high-frequency
            energy without damaging the skin surface.`,
          `This process forms coagulated columns, fostering healing and
            generating ample collagen layers. The RF capability ensures a
            controlled energy delivery per shot ensuring consistent ideal
            clinical results.`,
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
        <div className="text-accent mb-6 text-center md:text-left uppercase">
          <h3 className="text-4xl">No or minimized skin surface damage</h3>
        </div>
        <div className="md:row-span-4 row-start-2">
          <img className="content-center h-full w-full" src={laser} alt="" />
        </div>
        <div className="flex flex-col space-y-5">
          <p>
            The drawback associated with traditional lasers is that they can
            potentially damage the skin surface as they invariably penetrate
            through it.
          </p>
          <p>
            On the other hand, ASHLEY often employs insulated micro-needles that
            penetrate the dermis directly, delivering optimal high-frequency
            energy without damaging the skin surface.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
        <div className="md:row-span-2 mr-10">
          <img
            className="content-center h-full w-full"
            src={penetration}
            alt=""
          />
        </div>
        <div className="text-accent mb-6 text-center md:text-left uppercase">
          <h3 className="text-4xl">Controllable depth from 0.5 to 4.0 mm</h3>
        </div>

        <div className="flex flex-col space-y-5">
          <p>
            The physician can adjust the penetration depth of the needle tip
            based on the targeted depth within the skin. Through manipulation of
            the device settings in the user interface, the needles depth can
            range from 0.5 to 4.0 mm beneath the skin surface.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
        <div className="text-accent mb-6 text-center md:text-left uppercase">
          <h3 className="text-4xl">Technology and skin reaction</h3>
        </div>
        <div className="md:row-span-2 row-start-2">
          <img
            className="content-center h-full w-full"
            src={noninsulated}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-5">
          <p>
            In a fractional RF microneedle system, the choice between insulated
            and non-insulated needles plays a crucial role in determining the
            impact on skin damage and tissue coagulation. Choosing between
            insulated and non-insulated needles depends on the treatment goals.
          </p>
        </div>
        <p>
          Insulated needles are often preferred when the focus is on minimizing
          surface damage and precisely controlling the depth of penetration for
          specific skin concerns.
        </p>
        <p>
          Non-insulated needles may be chosen for treatments where a more
          widespread impact and coagulation are desired, even at the expense of
          some superficial damage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
        <div className="text-accent mb-6 md:text-left uppercase col-span-2">
          <h3 className="text-4xl text-right">
            Only 1 to 2 days of minimal downtime
          </h3>
        </div>
        <div className="md:row-span-2">
          <img className="w-full h-full" src={downtime} alt="" />
        </div>

        <div className="flex flex-col space-y-5">
          <p>
            The skin surface damage when treated with ASHLEY is minimized as the
            insulated micro-needles penetrate the dermis directly. This results
            in a minimal downtime of only 1 to 2 days after the treatment,
            allowing patients to swiftly resume their normal activities.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
        <div className="text-accent mb-6 text-center md:text-left uppercase col-span-2">
          <h3 className="text-4xl">Tips for different clinical goals</h3>
        </div>
        <div className="">
          <img className="bg-primary" src={tip1} alt="" />
        </div>
        <div className="">
          <img className="bg-primary" src={tip2} alt="" />
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
        <div className="tb-col">POWER</div>
        <div className="tb-col">40 W</div>
        <div className="tb-col">DEPTH LEVEL</div>
        <div className="tb-col">0.5-4.0 mm</div>
        <div className="tb-col">REPEAT TIME</div>
        <div className="tb-col">0.5s- 3.0 Ms, OFF</div>
        <div className="tb-col">REPETITION RATE</div>
        <div className="tb-col">1 MHz / 2MHz</div>
        <div className="tb-col">OUTPUT LEVEL</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>Main Board</span>
          <span>Single shot: Level 1 to 50</span>
          <span>Double shot: 1 to 100</span>
        </div>
        <div className="tb-col">OPERATION MODE</div>

        <div className="tb-col">Auto / Manual</div>
        <div className="tb-col">NEEDLE TIPS</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>ANI-36 (36-pin); Ablative needle, insulated</span>
          <span>ANT-36 (36-pin); non-ablative needle, not insulated</span>
          <span>ANN-36 (36-pin); Ablative needle, not insulated</span>
          <span>Others (49-pin); Ablative needle, insulated</span>
        </div>
        <div className="tb-col">OPERATION AREA</div>
        <div className="tb-col">15 mm × 15 mm</div>
        <div className="tb-col">ELECTRICAL REQUIREMENTS</div>
        <div className="tb-col">120-240 VAC, 50/60 Hz</div>
        <div className="tb-col">DIMENSION (W’L’H)</div>
        <div className="tb-col">380mm (W) X 440mm (L) X 1150mm (H)</div>
        <div className="tb-col">WEIGHT</div>
        <div className="tb-col">22Kg</div>
      </div>
    </GradientLayout>
);

export default Pt4000;
