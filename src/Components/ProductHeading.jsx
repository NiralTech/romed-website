const ProductHeading = ({ image, title, desc, content }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:mx-64 px-4 gap-2">
    <div className="max-w-96 max-h-[700px]">
      <img className="h-full w-full object-contain" src={image} alt="" />
    </div>
    <div className="flex flex-col space-y-6">
      <div className="text-white mb-6 text-center md:text-left uppercase">
        <h3 className="text-4xl">{title}</h3>
        <p className="my-4">{desc}</p>
      </div>

      <div className="flex flex-col space-y-4">
        {content.map((x, index) => (
          <p key={index}>{x}</p>
        ))}
      </div>

      <div>
        <a href="/registration" className="button">
          Brochure
        </a>
      </div>
    </div>
  </div>
);

export default ProductHeading;
