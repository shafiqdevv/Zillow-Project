
function AreYouReal() {
  return (
    <section className="w-full bg-[#F0F9FF] px-5 py-16 sm:px-8 sm:py-20 lg:py-20">

      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Are you a real estate agent?
        </h2>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-gray-800 sm:text-base sm:leading-8">

          Check out the extensive resources you can find in our{" "}

          <a
            href="#"
            className="text-[#174EA6] underline underline-offset-2 hover:text-blue-700"
          >
            Premier Agent® Resource Center
          </a>

          , covering everything from{" "}

          <a
            href="#"
            className="text-[#174EA6] underline underline-offset-2 hover:text-blue-700"
          >
            business plan templates
          </a>

          {" "}to complete guides on{" "}

          <a
            href="#"
            className="text-[#174EA6] underline underline-offset-2 hover:text-blue-700"
          >
            real estate marketing
          </a>

          . Not a Premier Agent yet? Find out how{" "}

          <a
            href="#"
            className="text-[#174EA6] underline underline-offset-2 hover:text-blue-700"
          >
            real estate advertising
          </a>

          {" "}on Zillow and Trulia can help you get more leads.

        </p>

      </div>

    </section>
  );
}

export default AreYouReal;
