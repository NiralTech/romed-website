import qmaxPic from "@/assets/qmax/qmax.png";
import indication from "@/assets/qmax/qmax-indication.png";
import beam3 from "@/assets/qmax/beam-profile-3.png";
import beam2 from "@/assets/qmax/beam-profile-2.png";
import beam1 from "@/assets/qmax/beam-profile-1.png";
import singlePulse from "@/assets/qmax/single-pulse.png";
import ptpPulse from "@/assets/qmax/ptp-pulse.png";
import longPulse from "@/assets/qmax/long-pulse-1064.png";
import handPieces from "@/assets/qmax/handpieces.png";
import ProductHeading from "@/Components/ProductHeading";
import GradientLayout from "../../Components/GradientLayout";

const Qmax = () => (
  <GradientLayout>
    <ProductHeading
      image={qmaxPic}
      title={"Q-MAX / Q-MAX PREMIUM"}
      desc={"Q-switched & Long-pulsed Nd: YAG Laser"}
      content={[
        `Q-MAX ensures significant power output for pigment procedures,
          maintaining consistent performance across a wide treatment area. The
          even distribution of energy improves safety and effectiveness,
          reducing the likelihood of skin thermal injury while selectively
          removing pigments in the dermis. Moreover, the PTP mode is designed to
          offer a more comfortable experience with reduced pain and faster
          regeneration compared to the single-pulse mode.`,
        `In addition to the advantages of Q-MAX, the enhanced Q-MAX PREMIUM
          model includes an additional long-pulsed mode that can be used for
          both hair removal and the treatment of vascular lesions.`,
      ]}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
      <div className="md:col-span-2">
        <h3 className="text-white text-4xl mb-6 uppercase  ">
          FLAT TOP-HAT BEAM PROFILE
        </h3>
      </div>
      <div>
        <p>
          Both Q-MAX and Q-MAX PREMIUM exhibit a flat top-hat beam profile, ensuring
          uniform and consistent energy delivery to the target area.
        </p>
        <div className="flex mt-10">
          <div>
            <img className="h-full w-full   " src={beam1} alt="" />
          </div>
          <div>
            <img className="h-full w-full" src={beam2} alt="" />
          </div>
        </div>
      </div>
      <div className="md:ml-20">
        <img className="h-full w-full" src={beam3} alt="" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-x-10 gap-y-4">
      <div className="md:col-span-2">
        <h3 className="text-white text-4xl mb-6 uppercase  ">
          Dual-pulse with less skin damage (PTP)
        </h3>
      </div>
      <div>
        <img className="h-full w-full " src={singlePulse} alt="" />
      </div>
      <p>
        By employing the PTP mode, both Q-MAX and Q-MAX PREMIUM have the capability
        to emit consecutive dual pulses at a maximum energy of 1.8 J. In
        contrast to the single-pulse mode, this configuration allows for the
        delivery of twice the number of pulses, each with nearly half the energy
        per pulse. The advantage lies in its ability to minimize treatment
        discomfort, as it avoids damaging normal surrounding skin tissues, a
        drawback associated with the single-pulse mode. Consequently, the
        reduced likelihood of side effects is achieved without compromising
        clinical results, and in most of cases, may even yield better clinical
        outcomes.
      </p>
      <div>
        <img className="h-full w-full " src={ptpPulse} alt="" />
      </div>
      <div className="flex flex-col ">
        <p>
          The transmission of a high energy level (e.g. 1.8J) in a single
          instance has the potential to harm the skin. Due to the fact
          physicians tend to administer less energy to the skin compared to PTP,
          therefore the photothermal effect necessary for collagen regeneration
          may not reach a sufficient level.
        </p>
        <p className="mt-10">
          In PTP mode, double the number of laser beams are administered,
          providing increased energy and vibration to effectively target and
          destroy melanin pigment. Additionally, this mode ensures that the
          photothermal effect required for collagen regeneration reaches a
          sufficient level.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-x-10 gap-y-4">
      <div className="md:col-span-2">
        <h3 className="text-white text-4xl mb-6 uppercase  ">
          1064 nm long-pulsed mode for more indications
        </h3>
      </div>
      <p>
        In addition to the advantages of Q-MAX, the enhanced Q-MAX PREMIUM model
        includes an additional long-pulsed mode that can be used for both hair
        removal and the treatment of vascular lesions.
      </p>
      <div>
        <img className="h-full w-full" src={longPulse} alt="" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-x-10 gap-y-4">
      <div className="md:col-span-2">
        <h3 className="text-white text-4xl mb-6 uppercase  md:text-right ">
          Various handpieces
        </h3>
      </div>
      <div>
        <img className="h-full w-full" src={handPieces} alt="" />
      </div>
      <p>
        With the diverse selection of handpieces provided by Q-MAX and Q-MAX
        PREMIUM, physicians can administer treatments to patients at the optimal
        settings.
      </p>
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

export default Qmax;
