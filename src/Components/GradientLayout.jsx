import Layout from "./Layout";

const GradientLayout = ({ children }) => (
  <Layout>
    <div className="flex flex-col mt-24 items-center bg-gradient-to-tr from-pink_light  to-accent text-white">
      {children}
    </div>
  </Layout>
);

export default GradientLayout;
