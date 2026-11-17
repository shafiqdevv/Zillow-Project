
import { MessageSquareHeart } from "lucide-react";

function FindLocalAgent() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    };

    console.log(user);
  };

  return (
    <section className="w-full min-h-screen bg-white px-5 py-12 sm:px-90">
      <div className="mx-auto w-full max-w-[715px]">
        {/* Heading */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <MessageSquareHeart
              size={32}
              fill="#13796D"
              color="white"
              strokeWidth={2}
              className="rounded-md"
            />

            <h1 className="text-2xl sm:text-[25px] font-bold text-black">
              Connect with a local agent
            </h1>
          </div>

          <p className="mt-2 text-lg sm:text-lg text-gray-600">
            We'll match you with a Zillow partner agent who can help.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-bold text-black">
              Name <span className="text-red-600">*</span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full h-13 rounded-2xl border border-gray-400 px-4 text-lg outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-bold text-black">
              Phone <span className="text-red-600">*</span>
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full h-13 rounded-2xl border border-gray-400 px-4 text-lg outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-black">
              Email <span className="text-red-600">*</span>
            </label>

            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full h-13 rounded-2xl border border-gray-400 px-4 text-lg outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-13 mt-4 rounded-2xl bg-blue-700 text-white text-xl font-bold hover:bg-blue-800 transition-colors duration-200 cursor-pointer"
          >
            Connect now
          </button>
        </form>

        {/* Disclaimer */}
        <p className="mt-3 text-xs leading-[23px] text-gray-600">
          By pressing Connect now, you are contacting a buyer's agent, you
          agree that Zillow Group and its affiliates, and real estate
          professionals may call/text you about your inquiry, which may
          involve use of automated means and prerecorded/artificial voices.
          You don't need to consent as a condition of buying any property,
          goods or services. Message/data rates may apply. You also agree to
          our{" "}
          <a
            href="#"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Terms of Use
          </a>
          . Zillow receives a fee from the agents we connect you with, at no
          cost to you. Zillow does not endorse any real estate professionals.
          We may share information about your recent and future site activity
          with your agent to help them understand what you're looking for in
          a home.
        </p>
      </div>
    </section>
  );
}

export default FindLocalAgent;
