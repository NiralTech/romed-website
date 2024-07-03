import Layout from "@/Components/Layout";

function Home() {
  return (
    <div id="home" className="">
      <Layout>
        <div className="h-screen bg-home-img bg-scroll bg-cover">
          <div className="z-30 h-screen pt-16 lg:h-auto lg:ml-32">
            <h2 className="flex flex-col justify-center ml-10 space-y-5 mt-28 lg:mt-40 lg:ml-40">
              <span className="text-3xl font-semibold tracking-wider lg:text-6xl text-link">
                Revolutionize
              </span>
              <span className="text-3xl font-semibold tracking-wider lg:text-6xl text-link">
                Enchant
              </span>
              <span className="text-3xl font-semibold tracking-wider lg:text-6xl text-link">
                Gratification
              </span>
            </h2>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
