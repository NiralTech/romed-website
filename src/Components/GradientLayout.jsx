import Layout from "./Layout";

const GradientLayout = ({ children }) => (
  <Layout>
    <div className="flex flex-col sm:mt-24 items-center bg-gradient-to-tr from-primary  to-black text-white ">
      {children}
    </div>
  </Layout>
);

export default GradientLayout;
