import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import PopularProducts from "@/components/PopularProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <Banner />
      <PopularProducts />
    </>
  );
};

export default Home;
