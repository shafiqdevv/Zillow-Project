import FrequentlyQuestion from "../Component/FrequentlyQuestion";
import Find from "../Component/GetAMortgage/Find";
import Get from "../Component/GetAMortgage/Get";
import How from "../Component/GetAMortgage/How";
import Why from "../Component/GetAMortgage/Why";

function GetAMortgage() {
  return (
    <div>
        <Get/>
        <Why/>
        <How/>
        <Find/>
        <FrequentlyQuestion/>
    </div>
  );
}

export default GetAMortgage;
