const ConsumablesCard = ({ image, titleText, titleDesc, details, file }) => (
  <div className="group flex flex-col items-center bg-secondary pb-6 m-4 space-y-10 justify-between h-[600px]  md:w-[33%] shadow-accent shadow-lg">
    <div className="h-[70%] w-full group-hover:h-[30%] transition-all duration-500">
      <img
        src={image}
        alt=""
        className="h-full w-full bg-white border border-accent bg-gradient-to-tr from-accent to- object-contain"
      />
    </div>
    <div className="flex flex-col items-center text-secondary group-hover:hidden transition-all duration-500">
      <h4 className="text-3xl font-bold uppercase text-primary">{titleText}</h4>
      <p className="text-primary">{titleDesc}</p>
    </div>
    <div className="group-hover:flex flex-col space-y-5 px-5 items-start justify-around text-white hidden transition-all duration-500">
      <div className="flex flex-col space-y-3">
        {details.map((detail, index) => (
          <p className="text-primary" key={index}>
            {detail}
          </p>
        ))}
      </div>
      <a
        href={file}
        download={`${titleText}.pdf`}
        target="_blank"
        className="group-hover:flex rounded hidden transition-all duration-500 button mx-auto"
      >
        Brochure
      </a>
    </div>
  </div>
);

export default ConsumablesCard;
