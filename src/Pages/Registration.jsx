import React from "react";

import Layout from "@/Components/Layout";
import GradientLayout from "../Components/GradientLayout";

const Registration = () => (
  <Layout>
    <GradientLayout>
      <div className="md:mt-20 h-screen md:w-1/2">
        <div className="flex-col space-y-5 pt-4 text-primary flex">
          <form
            name="registration"
            className="flex flex-col"
            method="post"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <h2 className="mb-4 font-bold uppercase">Registration</h2>
            <input type="hidden" name="form-name" value="registration" />
            <div className="flex flex-row space-x-2">
              <input
                required
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input-text w-1/2"
              />
              <input
                required
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input-text w-1/2"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <input
                required
                type="text"
                name="organization"
                placeholder="Organization"
                className="input-text w-1/2"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="input-text w-1/2"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <input
                required
                type="text"
                name="speciality"
                placeholder="Speciality"
                className="input-text w-1/2"
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone"
                className="input-text w-1/2"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <input
                required
                type="text"
                name="country"
                placeholder="Country"
                className="input-text w-1/2"
              />
              <input
                required
                type="text"
                name="city"
                placeholder="City"
                className="input-text w-1/2"
              />
            </div>
            <textarea
              required
              name="questions"
              rows="10"
              placeholder="Questions"
              className="text-area"
            ></textarea>
            <div data-netlify-recaptcha="true"></div>
            <div>
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </GradientLayout>
  </Layout>
);

export default Registration;
