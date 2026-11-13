
import { useEffect, useState } from "react";
import { X } from "lucide-react";

function PopUp({ onClose }) {
  const [isFormValid, setIsFormValid] = useState(false);

  // Prevent background page scrolling
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const fieldClass =
    "h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 outline-none transition focus:border-[#006AFF] focus:ring-2 focus:ring-blue-100";

  const labelClass =
    "mb-2 block text-base font-bold text-gray-900";

  // Check whether all required fields are valid
  const handleFormChange = (e) => {
    setIsFormValid(e.currentTarget.checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      return;
    }

    // BuyAbility calculation will be implemented here.
    console.log("Form submitted");
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-black/60 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-[100dvh] w-full flex-col overflow-hidden bg-white text-gray-900 md:h-[90dvh] md:max-h-[760px] md:max-w-2xl md:rounded-2xl"
      >
        {/* Fixed Header */}
        <header className="z-10 flex shrink-0 items-center justify-between border-b border-gray-200 bg-white px-5 py-4 sm:px-8">
          <h2 className="text-xl font-bold tracking-tight">
            BuyAbility <sup className="text-[10px]">SM</sup>
          </h2>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close popup"
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <X size={23} />
          </button>
        </header>

        {/* Scrollable Content */}
        <main className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8">
          <div className="mx-auto max-w-lg">

            {/* Small Centered Image */}
            <img
              src="https://www.zillow.com/s3/web-platform/sub-apps/zillow/buyability-sub-app/buyability-sub-app.prod.main.18870298.273702d5/web/2413814005221588895faf75de08f014.svg"
              alt="Beautiful home"
              className="mx-auto mb-5 h-24 w-32 rounded-xl object-cover sm:h-28 sm:w-40"
            />

            {/* Heading */}
            <h2 className="text-2xl font-bold sm:text-3xl">
              Find a home in your budget
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
              See a real-time view of what you can afford in today's market.
            </p>

            <p className="mt-5 text-xs text-gray-500">
              * Indicates a required field
            </p>

            {/* Form */}
            <form
              id="buyability-form"
              onChange={handleFormChange}
              onSubmit={handleSubmit}
              className="mt-5 space-y-5"
            >

              {/* Row 1: Location + Credit Score */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>
                  <label htmlFor="location" className={labelClass}>
                    Location*
                  </label>

                  <select
                    id="location"
                    name="location"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select location
                    </option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="miami">Miami</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="creditScore" className={labelClass}>
                    Credit score*
                  </label>

                  <select
                    id="creditScore"
                    name="creditScore"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select credit score
                    </option>
                    <option value="excellent">Excellent (740+)</option>
                    <option value="good">Good (670–739)</option>
                    <option value="fair">Fair (580–669)</option>
                    <option value="poor">Poor (Below 580)</option>
                  </select>
                </div>

              </div>

              {/* Row 2: Annual Income */}
              <div>
                <label htmlFor="income" className={labelClass}>
                  Annual income*
                </label>

                <input
                  id="income"
                  name="income"
                  type="number"
                  min="1"
                  required
                  placeholder="$ / year"
                  className={fieldClass}
                />

                <span className="mt-1 block text-xs text-gray-500">
                  Pre-tax income
                </span>
              </div>

              {/* Row 3: Down Payment + Monthly Debt */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>
                  <label htmlFor="downPayment" className={labelClass}>
                    Down payment*
                  </label>

                  <input
                    id="downPayment"
                    name="downPayment"
                    type="number"
                    min="1500"
                    required
                    placeholder="$"
                    className={fieldClass}
                  />

                  <span className="mt-1 block text-xs text-gray-500">
                    At least $1,500
                  </span>
                </div>

                <div>
                  <label htmlFor="monthlyDebt" className={labelClass}>
                    Monthly debt*
                  </label>

                  <input
                    id="monthlyDebt"
                    name="monthlyDebt"
                    type="number"
                    min="0"
                    required
                    placeholder="$ / month"
                    className={fieldClass}
                  />

                  <span className="mt-1 block text-xs text-gray-500">
                    Loans, credit cards, alimony
                  </span>
                </div>

              </div>
            </form>
          </div>
        </main>

        {/* Fixed Footer */}
        <footer className="z-10 shrink-0 border-t border-gray-200 bg-white px-5 py-4 sm:px-8">
          <div className="mx-auto max-w-lg">

            <button
              type="submit"
              form="buyability-form"
              disabled={!isFormValid}
              className={`w-full rounded-full px-5 py-3.5 text-sm font-semibold transition-colors ${
                isFormValid
                  ? "cursor-pointer bg-[#006AFF] text-white hover:bg-blue-700"
                  : "cursor-not-allowed bg-gray-300 text-gray-500"
              }`}
            >
              Get your BuyAbility
            </button>

            <p className="mt-3 text-center text-xs leading-5 text-gray-500">
              We will store your data according to the{" "}
              <a
                href="#"
                className="font-medium text-[#006AFF] underline"
              >
                Zillow Home Loans privacy policy
              </a>
              .
            </p>

          </div>
        </footer>
      </div>
    </div>
  );
}

export default PopUp;
