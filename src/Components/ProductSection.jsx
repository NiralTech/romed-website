
const ProductSection = ({ heading, articles }) => (
  <section className="flex flex-col items-center justify-start text-left md:w-3/4 mt-10 md:mx-64">
    <h3 className="text-4xl mb-6">{heading}</h3>
    <article className="pl-10">
      {articles.map((article) => (
        <p className="p-4">{article}</p>
      ))}
    </article>
  </section>
);

export default ProductSection;