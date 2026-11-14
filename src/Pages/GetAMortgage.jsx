
import Footer from "../Component/common/Footer";
import FrequentlyQuestion from "../Component/common/FrequentlyQuestion";
import Find from "../Component/GetAMortgage/Find";
import Get from "../Component/GetAMortgage/Get";
import HomeLoansFooter from "../Component/GetAMortgage/HomeLoansFooter";
import How from "../Component/GetAMortgage/How";
import LearnMore from "../Component/GetAMortgage/LearnMore";
import Testimonials from "../Component/GetAMortgage/Testimonials";
import Why from "../Component/GetAMortgage/Why";

function GetAMortgage() {
  return (
    <div>
        <Get/>
        <Why/>
        <How/>
        <Find/>
        <FrequentlyQuestion/>
        <Testimonials/>
        <LearnMore/>
        <HomeLoansFooter/>
        <Footer/>
    </div>
  );
}

export default GetAMortgage;
