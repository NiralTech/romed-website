import React from "react";

import picoPremium from "../assets/pico/pico-premium.png";
import Layout from "../Components/Layout";

export default function PicoPremium() {
  return (
    <Layout>
      <div className="flex flex-col mt-24 items-center md:mx-64">
        {/* <div className="w-[330px] h-[800px]">
            <img
            className="content-center h-full w-full"
            src={picoPremium}
            alt=""
            />
            </div> */}

        <ProductSection
          heading={"Pico Premium"}
          articles={[
            "Picosecond Laser PICO PREMIUM, a revolutionary picosecond Nd: YAG laser stands at the forefront of cutting-edge dermatological technology. Engineered to deliver unparalleled precision and efficacy, this advanced laser system redefines the standard for epidermal and dermal pigmented lesions, toning, rejuvenation, and tattoo removal.",
            "With its true 300 picosecond pulse duration, 6 different handpieces and wavelengths, PICO PREMIUM sets a new standard in addressing the most of challenging cases,providing practitioners with a powerful tool to achieve remarkable results across a spectrum of skin types and conditions.",
          ]}
        />

        <ProductSection
          heading={"Proved 300 picosecond pulse duration"}
          articles={[
            "The PICO Premium has undergone real test data analysis to conform its pulse duration, ensuring its peak power meets the necessary levels to achieve satisfactory clinical results.",
          ]}
        />

        <ProductSection
          heading={"Fractional handpiece for non-ablative skin rejuvenation"}
          articles={[
            "The fractional handpiece equipped with a hexagonal fractional lens produces a grid of 360 micro-spots with exceptionally high intensity, capable of inducing laser-induced optical breakdown (LIOB) within the skin. This process triggers skin regeneration and stimulates dermal remodelling.",
            "The picosecond laser releases incredibly short bursts of light capable of penetrating the skin, causing Laser-Induced Optical Breakdown (LIOB) within the dermis. This breakdown generates plasma formation, creating a carefully controlled thermal injury in the dermal layer while safeguarding the epidermis. This controlled injury prompts the body's natural healing process, encouraging the creation of fresh collagen and elastin fibres while restructuring the existing collagen. Ultimately, this process brings about rejuvenating effects on the skin.",
          ]}
        />
      </div>
    </Layout>
  );
}

const ProductSection = ({ heading, articles }) => (
  <section className="flex flex-col items-center justify-start text-left md:w-3/4 mt-10">
    <h3 className="text-4xl mb-6">{heading}</h3>
    <article className="pl-10">
      {articles.map((article) => (
        <p className="p-4">{article}</p>
      ))}
    </article>
  </section>
);
