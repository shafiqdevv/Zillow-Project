import Footer from "../Component/common/Footer";
import HeroSection from "../Component/Home/HeroSection";
import LastSection from "../Component/Home/LastSection";
import Section1 from "../Component/Home/Section1";
import Section2 from "../Component/Home/Section2";
import HomeActionCards from "../Component/Home/Section3";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      <HomeActionCards />
      <LastSection />
      <Footer />
    </>
  );
}
export default HomePage;