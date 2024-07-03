import ConsumablesCard from "@/Components/ConsumablesCard";
import Layout from "@/Components/Layout";

import consmetic from "@/assets/consumables/cosmetic-container.png";
import laserDoctor from "@/assets/consumables/laser-doctor.png";
import etre from "@/assets/consumables/etre.png";
import skinDoctor from "@/assets/consumables/skin-doctor.png";
import carbonq from "@/assets/consumables/carbonq.png";
import angela from "@/assets/consumables/angela.png";
import angelaFace from "@/assets/consumables/angela-face.png";

import lidokaFile from "@/assets/consumables/files/lidoka.pdf";
import laserDoctorFile from "@/assets/consumables/files/laserdoctor.pdf";
import entreFile from "@/assets/consumables/files/entre.pdf";
import skinDoctorFile from "@/assets/consumables/files/skindoctor.pdf";
import carbonqFile from "@/assets/consumables/files/carbonq.pdf";
import angelaBodyFile from "@/assets/consumables/files/angelabody.pdf";
import angelaFacefile from "@/assets/consumables/files/angelaface.pdf";

const Consumables = () => {
  const consumablesData = [
    {
      image: consmetic,
      titleText: "LIDOKA",
      titleDesc: "Lidocaine cream (500 g,30 g)",
      details: [
        "LIDOKA, containing 10.56% lidocaine, delivers rapid relief from pain and discomfort. The potent active ingredient in LIDOKA works swiftly and efficiently to alleviate discomfort.",
        "LIDOKA is specifically designed to eliminate unnecessary pain during various laser treatments, including fractional laser, long-pulsed Nd:YAG, diode laser, tattoo removal, and laser hair removal.",
      ],
      file: lidokaFile,
    },
    {
      image: laserDoctor,
      titleText: "Laser Doctor",
      titleDesc: "EGF cream (500 ml, 20 ml)",
      details: [
        "EGF (Epidermal Growth Factor) is often referred to as a cellular reproduction factor inherent in the human body. It binds to receptors on the skin surface, facilitating the generation of new cells. This protein, composed of 53 amino acids, naturally contributes to the production of new skin cells.",
        "Following a laser procedure, the application of LASER DOCTOR on the treated skin not only fosters the growth of new skin cells but also contributes to the preservation of skin elasticity and smoothness, effectively preventing the formation of wrinkles.",
      ],
      file: laserDoctorFile,
    },
    {
      image: etre,
      titleText: "ÊTRE BLANC",
      titleDesc: "Whitening Cream (60 ml)",
      details: [
        "ÊTRE BLANC is a whitening cream enriched with high-quality ingredients that enhance skin tone, reduce wrinkles, and provide deep moisturization for a rejuvenated look.",
        "ÊTRE BLANC effectively transforms rough and dry skin into a smooth and moist skin. It is particularly suitable for post-laser treatment, offering soothening and a comfortable sensation. Packed with essential nutrients, it adequately nourishes the skin, offering dual benefits of whitening and wrinkle care. The formulation includes EGF for improved skin tone and moisture retention, contributing to overall skin health.",
      ],
      file: entreFile,
    },
    {
      image: skinDoctor,
      titleText: "Skin Doctor",
      titleDesc: "Hydrocolloid circular band (46 sheets)",
      details: [
        "SKIN DOCTOR is an ultra-thin hydrocolloid round plaster that is designed for use after spot removal on the skin.",
        "SKIN DOCTOR, characterized by its thin, soft, and pliable nature, provides effective protection for treated skin against UV light and helps prevent scarring. Its waterproof feature acts as a barrier against external bacterial invasion, facilitating a quicker recovery process for the skin while minimizing scar formation.",
      ],
      file: skinDoctorFile,
    },
    {
      image: carbonq,
      titleText: "Carbon Q",
      titleDesc: "Carbon cream (50 ml)",
      details: [
        "CARBON Q is a carbon cream designed for use during carbon peel treatments with Q-switched Nd YAG laser.",
        "The carbon peel procedure involves the application of a liquid carbon layer on the face, penetrating deeply into the pores. A Q-switched Nd:YAG laser then eliminates the carbon lotion, while dead skin cells, blackheads, and excess oil removed together with the carbon lotion. This treatment also offers various benefits, including reduction of fine wrinkles, tightening of dilated pores, and alleviation of acne. Furthermore, it stimulates collagen growth, improves skin texture, and clears pores, aiding in the reduction of blackheads and whiteheads.",
      ],
      file: carbonqFile,
    },
    {
      image: angela,
      titleText: "Angela Body",
      titleDesc: "Hyaluronic acid filler for body",
      details: [
        "ANGELA BODY is a hyaluronic acid filler meticulously designed for body applications. Crafted with precision and innovation, ANGELA BODY promises to redefine the way we approach an ideal rejuvenation. Boasting a unique formulation that combines advanced technology with the natural benefits of hyaluronic acid, it aims to enhance a perfect rejuvenation result. Derived as a biocompatible derivative of hyaluronic acid, ANGELA BODY ensures seamless integration, providing a natural and harmonious enhancement to body features.",
      ],
      file: angelaBodyFile,
    },
    {
      image: angelaFace,
      titleText: "Angela Face",
      titleDesc: "Hyaluronic acid filler for face",
      details: [
        "ANGELA FACE is a hyaluronic acid filler meticulously designed for facial applications. Crafted with precision and innovation, ANGELA FACE promises to redefine the way we approach an ideal rejuvenation. Boasting a unique formulation that combines advanced technology with the natural benefits of hyaluronic acid, it aims to enhance a perfect rejuvenation result. Derived as a biocompatible derivative of hyaluronic acid, ANGELA FACE ensures seamless integration, providing a natural and harmonious enhancement to facial features.",
      ],
      file: angelaFacefile,
    },
  ];

  return (
    <>
      <Layout>
        <div className="mt-32 flex flex-col md:flex-row flex-wrap justify-center space-y-10">
          <div className="w-full text-center flex flex-col space-y-5">
            <h3 className="uppercase text-3xl font-bold ">Consumables</h3>
            <p>Meet our consumable product</p>
          </div>
          {consumablesData.map((item) => (
            <ConsumablesCard key={item.titleText} {...item} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Consumables;
