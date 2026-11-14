
import Footer from "../Component/common/Footer";

function Inbox() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <section className="mx-auto flex min-h-[650px] max-w-[1440px] flex-col-reverse items-center justify-between gap-12 px-6 py-16 sm:px-10 lg:min-h-[720px] lg:flex-row lg:gap-10 lg:px-16 xl:px-20">

        {/* Left Content */}
        <div className="w-full max-w-[490px]">
          <h2 className="text-[34px] font-extrabold leading-[1.08] tracking-[-1.2px] text-[#111111] sm:text-[40px]">
            Your communications center
          </h2>

          <p className="mt-5 max-w-[455px] text-[17px] leading-[1.7] text-[#171717] sm:text-[19px]">
            Your inbox is the place to keep track of your conversations.
            Sign in to stay connected and manage your communications
            all in one place.
          </p>

          <button
            type="button"
            className="mt-8 h-12 w-full max-w-50 rounded-[15px] bg-[#0647d9] text-[18px] font-bold text-white transition-colors duration-200 hover:bg-[#0035b3] focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Sign in
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex w-full max-w-90 items-center justify-center lg:mb-10 lg:max-w-120 lg:w-[57%]">
          <img
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/10/2026/04/Inbox.png"
            alt="Illustration of inbox conversations"
            className="h-auto w-full"
          />
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default Inbox;
