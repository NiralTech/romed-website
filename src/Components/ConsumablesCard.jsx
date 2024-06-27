const ConsumablesCard = ({ image, titleText, titleDesc, details, file }) => (
  <div className="group rounded-2xl flex flex-col items-center bg-primary py-20 m-4 space-y-10 justify-around h-[700px] md:w-[35%] ">
    <div className="h-[70%] group-hover:h-[30%] transition-all duration-500">
      <img src={image} alt="" className="h-full w-full rounded-full bg-white" />
    </div>
    <div className="flex flex-col items-center text-white group-hover:hidden transition-all duration-500">
      <h4 className="text-3xl uppercase">{titleText}</h4>
      <p className="text-white">{titleDesc}</p>
    </div>
    <div className="group-hover:flex flex-col space-y-2 px-5 md:px-10 items-start justify-around text-white hidden transition-all duration-500 overflow-y-auto">
      {details.map((detail, index) => (
        <p className="text-white" key={index}>{detail}</p>
      ))}
    </div>
    <a
      href={file}
      download={`${titleText}.pdf`}
      target="_blank"
      className="group-hover:flex rounded hidden transition-all duration-500 button"
    >
      Brochure
    </a>
  </div>
);

export default ConsumablesCard;
