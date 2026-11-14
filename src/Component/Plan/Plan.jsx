import StartPlan from "./StartPlan";
import FinancialSnapshot from "./FinancialSnapshot";
import HomeLoans from "./HomeLoans";
import BuildYourTeam from "./BuildYourTeam";
import UnderstandProcess from "./UnderstandProcess";

export default function Plan() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[880px] px-4 py-6">

        <h1 className="mb-4 text-2xl font-bold text-black">
          Plan
        </h1>

        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[2fr_1fr]">

          {/* Left Column */}
          <div className="flex min-w-0 flex-col gap-4">
            <StartPlan />
            <FinancialSnapshot />
            <HomeLoans />
          </div>

          {/* Right Column */}
          <div className="flex min-w-0 flex-col gap-4">
            <BuildYourTeam />
            <UnderstandProcess />
          </div>

        </div>
      </div>
    </section>
  );
}