import React from "react";

import GradientLayout from "../Components/GradientLayout";

const Registration = () => {
  const specialities = [
    "Non-Physician",
    "Anatomical Pathology",
    "Anesthesiology",
    "Cardiology",
    "Cardiovascular/Thoracic Surgery",
    "Clinical Immunology/Allery",
    "Critical Care Medicine",
    "Dermatology",
    "Diagnostic Radiology",
    "Emergency Medicine",
    "Endocrinology and Metabolism",
    "Family Medicine",
    "Gastroenterology",
    "General Internal Medicine",
    "General Surgery",
    "General/Clinical Pathology",
    "Geriatric Medicine",
    "Hematology",
    "Medical Biochemistry",
    "Medical Genetics",
    "Medical Microbiology and Infectious Diseases",
    "Medical Oncology",
    "Nephrology",
    "Neurology",
    "Neurosurgergy",
    "Nuclear Medicine",
    "Nursing",
    "Obstetrics/Gynecology",
    "Occupational Medicine",
    "Ophthalmology",
    "Orthopedic Surgery",
    "Otolaryngology",
    "Pediatrics",
    "Physical Medicine and Rehabilitation",
    "Plastic Surgery",
    "Psychiatry",
    "Public Health and Preventive Medicine",
    "Radiation Oncoloy",
    "Respirology",
    "Rheumatology",
    "Urology",
  ];

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Côte d'Ivoire",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    'Eswatini (fmr. "Swaziland")',
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (North)",
    "Korea (South)",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const honorific = ["Mr.", "Ms.", "Mrs.", "Dr.", "Prof."];
  return (
    <GradientLayout>
      <div className="md:mt-20 h-screen md:w-1/2">
        <div className="flex-col space-y-5 pt-4 text-white flex">
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
              <select
                required
                name="honorific"
                placeholder="honorific"
                className="input-text w-1/3 text-primary"
              >
                <option disabled selected>
                  Honorific
                </option>

                {honorific.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
              <input
                required
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input-text w-1/3"
              />
              <input
                required
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input-text w-1/3"
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
              <select
                required
                name="speciality"
                placeholder="Speciality"
                className="input-text w-1/2 text-primary"
              >
                <option disabled selected>
                  Specialty
                </option>

                {specialities.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone"
                className="input-text w-1/2"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <select
                required
                name="country"
                placeholder="country"
                className="input-text w-1/2 text-primary"
              >
                <option disabled selected>
                  Country
                </option>

                {countries.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
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
  );
};

export default Registration;
