import React from "react";

import picoPremium from "@/assets/pico/pico-premium.png";
import picoPulse from "@/assets/pico/pico-pulse.png";
import picoFractional from "@/assets/pico/PICO PREMIUM Fractional HP.png";
import picoSecond from "@/assets/pico/300-picosecond.png";
import picoWavelength from "@/assets/pico/pico-wavelength.png";
import picoZoom from "@/assets/pico/pico-zoom.png";
import picoDesc from "@/assets/pico/pico-desc.png";

import ProductHeading from "@/Components/ProductHeading";
import GradientLayout from "../../Components/GradientLayout";

export default function PicoPremium() {
  return (
    <GradientLayout>
      <ProductHeading
        image={picoPremium}
        title={"Pico Premium"}
        desc={"Picosecond laser"}
        content={[
          `Picosecond Laser PICO PREMIUM, a revolutionary picosecond Nd: YAG
            laser stands at the forefront of cutting-edge dermatological
            technology. Engineered to deliver unparalleled precision and
            efficacy, this advanced laser system redefines the standard for
            epidermal and dermal pigmented lesions, toning, rejuvenation, and
            tattoo removal.`,
          `With its true 300 picosecond pulse duration, 6 different handpieces
            and wavelengths, PICO PREMIUM sets a new standard in addressing the
            most of challenging cases,providing practitioners with a powerful
            tool to achieve remarkable results across a spectrum of skin types
            and conditions.`,
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-64 my-20 gap-4 px-4">
        <div className="md:col-span-2">
          <h3 className="text-white text-4xl mb-6 text-center md:text-left uppercase">
            {"Proved 300 picosecond pulse duration"}
          </h3>
        </div>
        <p>
          The PICO Premium has undergone real test data analysis to conform its
          pulse duration, ensuring its peak power meets the necessary levels to
          achieve satisfactory clinical results.
        </p>
        <div className="gap-2 ">
          <img className="h-full w-full" src={picoPulse} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-64 my-20 gap-4 px-4">
        <div className="md:col-span-2">
          <h3 className="text-white text-4xl mb-6 text-center md:text-left uppercase">
            {"Fractional handpiece for non-ablative skin rejuvenation"}
          </h3>
        </div>
        <p>
          The fractional handpiece equipped with a hexagonal fractional lens
          produces a grid of 360 micro-spots with exceptionally high intensity,
          capable of inducing laser-induced optical breakdown (LIOB) within the
          skin. This process triggers skin regeneration and stimulates dermal
          remodelling..
        </p>
        <div className="gap-2 row-span-1">
          <img className="content-center" src={picoSecond} alt="" />
        </div>
        <p>
          The picosecond laser releases incredibly short bursts of light capable
          of penetrating the skin, causing Laser-Induced Optical Breakdown
          (LIOB) within the dermis. This breakdown generates plasma formation,
          creating a carefully controlled thermal injury in the dermal layer
          while safeguarding the epidermis. This controlled injury prompts the
          body's natural healing process, encouraging the creation of fresh
          collagen and elastin fibres while restructuring the existing collagen.
          Ultimately, this process brings about rejuvenating effects on the
          skin.
        </p>
        <div className="gap-2 row-span-1 w-32 h-[350px]">
          <img
            className="content-center rotate-45 w-full h-full ml-24"
            src={picoFractional}
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-64 my-20 gap-4 px-4">
        <div className="md:col-span-2">
          <h3 className="text-white text-4xl mb-6 uppercase">
            Various wavelengths and handpieces
          </h3>
        </div>

        <div className="gap-2">
          <img className="content-center" src={picoWavelength} alt="" />
        </div>
        <div className="mt-16">
          <p className="p-4">
            With its diverse array of six distinct wavelengths of the various
            handpieces, the PICO PREMIUM is adept at precisely targeting an
            extensive spectrum of tattoo pigments.
          </p>

          <p className="p-4">
            This comprehensive range enables effective treatment across almost
            all colours present in various tattoo inks, ensuring thorough and
            efficient tattoo removal.
          </p>
          <div className="gap-2">
            <img className="content-center" src={picoZoom} alt="" />
          </div>
        </div>
      </div>

      <div className="grid  md:mx-64 my-20 gap-4">
        <div>
          <h3 className="text-white text-4xl mb-6 uppercase text-center">
            Indication
          </h3>
        </div>

        <div className="gap-2">
          <img className="content-center" src={picoDesc} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:mx-6 my-20">
        <div className="col-span-2">
          <h3 className="text-white text-4xl mb-6 uppercase text-center ">
            Technical Specifications
          </h3>
        </div>
        <div className="tb-col">LASER MEDIUM</div>
        <div className="tb-col">Nd YAG</div>
        <div className="tb-col">WAVELENGTHS</div>
        <div className="tb-col">1064,532,585,595,650,660 nm</div>
        <div className="tb-col">PULSE ENERGY</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>Max, 500 mJ @1064 nm</span> <span>Max, 250 mJ @532 nm</span>{" "}
          <span>Max, 150 mJ @585/595 nm Max, 100 mJ @650/660 nm</span>
        </div>
        <div className="tb-col">PULSE DURATION</div>
        <div className="tb-col">300 ps</div>
        <div className="tb-col">SPOT SIZE</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>2-10 mm @1064/532nm</span>
          <span>2-3 mm @585/595/650/660 nm</span>
        </div>
        <div className="tb-col">REPITITION RATE</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>2-10 mm @1064/532nm</span>
          <span>2-3 mm @585/595/650/660 nm</span>
        </div>
        <div className="tb-col">AIMING BEAM</div>
        <div className="tb-col">Diode 650 nm</div>
        <div className="tb-col">HANDPIECES</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>Standard Zoom HP</span>
          <span>Optional Fractional HP-585/595/650/660 Dye HPs</span>
        </div>
      </div>
    </GradientLayout>
  );
}
