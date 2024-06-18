import React from "react";

import contactUsSvg from "../assets/contact-us.svg";
import Layout from "../Components/Layout";

export default function Careers() {
  return (
    <Layout>
      <div className="md:mt-20 md:h-screen">
        <div className="absolute top-0 h-full -z-10">
            <img
              src={contactUsSvg}
              alt=""
              className="object-cover h-screen lg:h-auto md:w-full"
            />
          </div>
        <div className="flex flex-col space-y-5 pt-32 text-primarypr-10 pl-10 lg:pl-[55%]">
          <form name="careers" method="post" className="flex flex-col pr-10">
            <h2 className="mb-4 font-bold uppercase">Join Us</h2>
            <input type="hidden" name="form-name" value="careers" />

            <input
              required
              type="text"
              placeholder="Name*"
              className="input-text"
            />
            <input
              required
              type="email"
              name=""
              id=""
              placeholder="Email*"
              className="input-text"
            />
            <input
              required
              type="tel"
              name=""
              id=""
              placeholder="Phone number*"
              className="input-text"
            />
            <input
              type="file"
              name=""
              id=""
              placeholder="Resume"
              className="input-text"
            />
            <textarea
              name=""
              id=""
              rows="10"
              placeholder="Description"
              className="text-area"
            ></textarea>
            <div>
              <button className="px-4 py-2 text-white rounded-full bg-accent">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
