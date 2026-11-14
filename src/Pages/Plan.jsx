import StartPlan from "../Component/Plan/StartPlan";
import FinancialSnapshot from "../Component/Plan/FinancialSnapshot";
import BuildYourTeam from "../Component/Plan/BuildYourTeam";
import UnderstandProcess from "../Component/Plan/UnderstandProcess";
import GetYourBuyAbility from "../Component/GetYourBuyAbility/GetYourBuyAbility";
import Footer from "../Component/common/Footer";

export default function Plan() {
  return (
    <div>
      <section className="w-full bg-white">
      <div className="mx-auto max-w-220 p-2">

        <h1 className="mb-4 text-4xl font-bold text-black mt-15">
          Plan
        </h1>

        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[2fr_1fr]">

          {/* Left Column */}
          <div className="flex min-w-0 flex-col gap-4">
            <StartPlan />
            <FinancialSnapshot />
            <GetYourBuyAbility/>
          </div>

          {/* Right Column */}
          <div className="flex min-w-0 flex-col gap-4">
            <BuildYourTeam />
            <UnderstandProcess />
          </div>

        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}