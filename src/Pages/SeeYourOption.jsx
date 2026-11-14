
import Footer from "../Component/common/Footer";
import sellQuestions from "../Component/SeeYourOption/sellQuestions";
import BuildSmartSelling from "../Component/SeeYourOption/BuildSmartSelling";
import CashOfferSection from "../Component/SeeYourOption/CashOfferSection";
import FindYourAgentSection from "../Component/SeeYourOption/FindYourAgentSection";
import ForSaleByOwnerSection from "../Component/SeeYourOption/ForSaleByOwnerSection";
import PartnerAgentBenefits from "../Component/SeeYourOption/PartnerAgentBenefits";
import SellingOptionsHero from "../Component/SeeYourOption/SellingOptionsHero";
import SellingPathSection from "../Component/SeeYourOption/SellingPathSection";
import SellingResourcesSection from "../Component/SeeYourOption/SellingResourcesSection";
import FrequentlyQuestion from "../Component/common/FrequentlyQuestion";

function SeeYourOptionPage() {
  return (
    <div className="md:px-30">
      <SellingOptionsHero />
      <PartnerAgentBenefits />
      <CashOfferSection />
      <FindYourAgentSection />
      <ForSaleByOwnerSection />
      <SellingResourcesSection />
      <BuildSmartSelling />
      <FrequentlyQuestion questions={sellQuestions} />
      <SellingPathSection />
      <Footer />
    </div>
  );
}

export default SeeYourOptionPage;
