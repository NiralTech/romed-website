import Layout from "../Components/Layout";

import curelux from "../assets/curelux/curelux.png";

const CureLux = () => (
  <Layout>
    <div className="flex flex-col mt-24 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 my-20 md:mx-64 px-4 gap-2">
        <div className="md:row-span-4 row-start-2">
          <img className="content-center h-full w-full" src={curelux} alt="" />
        </div>
        <div className="text-accent mb-6 text-center md:text-left uppercase">
          <h3 className="text-4xl">CureLux</h3>
          <p className="my-6">Light Emitting Diode</p>
        </div>
        <p>
          CURELUX is an advanced light-emitting diode (LED) device to elevate
          skincare through the strategic integration of four distinct
          wavelengths: 660 nm, 415 nm, 830 nm, and 585 nm. This cutting-edge
          technology harnesses the power of phototherapy, offering a
          multifaceted approach to address a wide spectrum of skin concerns.
        </p>
        <p>
          From promoting skin rejuvenation and stimulating hair regrowth to
          actively managing acne, accelerating wound healing, and catering to
          various dermatological indications, CURELUX emerges as a comprehensive
          tool for holistic skincare.
        </p>
      </div>

      <div className="grid grid-cols-1 my-20 md:mx-64 px-4 gap-2">
        <div className="text-accent mb-6 text-center md:text-left uppercase">
          <h3 className="text-4xl">Feature</h3>
        </div>
        <ul className=" pl-10">
          <li className="py-2 list-disc">
            High power 4-in-1 device with four wavelengths (660 nm, 415 nm, 830
            nm, and 585 nm)
          </li>
          <li className="py-2 list-disc">
            High output LED power with adjustment function according to skin
            concerns
          </li>
          <li className="py-2 list-disc">
            Low noise operation to provide comfortable treatment environment
          </li>
          <li className="py-2 list-disc">
            High-efficiency lens for optimal performance and longevity
          </li>
          <li className="py-2 list-disc">
            Long durability and robust device that never fails its functionality
          </li>
          <li className="py-2 list-disc">
            9 memory functions to cater a variety of treatment requirements
          </li>
          <li className="py-2 list-disc">
            Dedicated solutions offering advanced features that make it a
            standout choice in the phototherapy
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:mx-6 my-20">
        <div className="col-span-2">
          <h3 className="text-accent text-4xl mb-6 uppercase text-center ">
            Technical Specifications
          </h3>
        </div>
        <div className="tb-col">DEVICE TYPE</div>
        <div className="tb-col">Light Emitting Diode (LED)</div>
        <div className="tb-col">WAVELENGTHS</div>
        <div className="tb-col">1064,532,585,595,650,660 nm</div>
        <div className="tb-col">ELECTRICAL REQUIREMENTS</div>

        <div className="tb-col">AC 100 V / 240 V 50 Hz 5-8.5 A</div>
        <div className="tb-col">CONTROL BOARD</div>
        <div className="flex flex-col space-y-2 tb-col">
          <span>Main Board</span>
          <span>LED control board</span>
          <span>4 colour LED board</span>
        </div>
        <div className="tb-col">RATED LIFE</div>

        <div className="tb-col">10000 H</div>
      </div>
    </div>
  </Layout>
);

export default CureLux;
