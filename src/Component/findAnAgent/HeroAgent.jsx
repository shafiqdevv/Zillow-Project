
import { useState } from "react";
import Search from "../common/Search";

function HeroAgent() {
  const [activeTab, setActiveTab] = useState("name");
  const [agentName, setAgentName] = useState("");

  return (
    <section
      className="relative flex min-h-[465px] flex-col items-center bg-cover bg-center bg-no-repeat px-4 pt-16 sm:pt-20"
      style={{
        backgroundImage:
          "url('https://delivery.digitallibrary.zillowgroup.com/public/SZ_Agent_BoZSepLaunchEmails_Q323_Secondary_Photo_2x_webp_CMS_Extra_Large.webp')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Heading */}
      <h1 className="relative z-10 max-w-3xl text-center text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        A great agent makes
        <br className="hidden sm:block" />
        all the difference
      </h1>

      {/* Search Box */}
      <div className="relative z-20 mt-10 w-full max-w-[680px] rounded-xl bg-white p-4 shadow-xl">

        <h2 className="mb-4 text-base font-semibold text-gray-800">
          Find a real estate agent
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">

          {/* Tabs */}
          <div className="flex shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("location")}
              className={`flex-1 border px-5 py-3 font-semibold transition sm:flex-none ${
                activeTab === "location"
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-300 text-gray-800 hover:bg-gray-50"
              }`}
            >
              Location
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("name")}
              className={`flex-1 border px-5 py-3 font-semibold transition sm:flex-none ${
                activeTab === "name"
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-300 text-gray-800 hover:bg-gray-50"
              }`}
            >
              Name
            </button>
          </div>

          {/* Name Tab */}
          {activeTab === "name" && (
            <>
              <div className="flex min-h-[54px] min-w-0 flex-1 items-center rounded-md border border-gray-300 px-4 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200">

                <svg
                  className="mr-3 h-5 w-5 shrink-0 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5Z" />
                </svg>

                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  placeholder="Agent name"
                  className="w-full min-w-0 bg-transparent text-gray-800 outline-none placeholder:text-gray-500"
                />
              </div>

              {/* Find Agent Button */}
              <button
                type="button"
                className="flex min-h-[54px] shrink-0 items-center justify-center gap-2 rounded-md bg-[#006AFF] px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16 16 5 5" />
                </svg>

                Find agent
              </button>
            </>
          )}

          {/* Location Tab */}
          {activeTab === "location" && (
            <div className="min-w-0 flex-1">
              <Search size="medium" />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default HeroAgent;
