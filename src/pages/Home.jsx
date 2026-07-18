import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import FeaturedProduct from "../components/FeaturedProduct";
import BestGear from "../components/BestGear";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCard />
      <FeaturedProduct />
      <BestGear />
      <Footer />
    </>
  );
}

export default Home;