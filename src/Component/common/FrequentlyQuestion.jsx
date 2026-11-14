
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FrequentlyQuestion({
  questions = [],
  title = "Frequently asked questions",
}) {
  const [openQuestions, setOpenQuestions] = useState([]);
  const sectionId = useId();

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[1000px]">

        {/* HEADING */}
        <h2 className="mb-7 text-[27px] font-bold tracking-tight text-[#17171D] sm:text-[32px] lg:text-[36px]">
          {title}
        </h2>

        {/* QUESTIONS */}
        <div className="border-t border-[#E0E0E5]">
          {questions.map((item, index) => {
            const isOpen = openQuestions.includes(index);
            const answerId = `${sectionId}-answer-${index}`;

            return (
              <div
                key={item.id ?? item.question}
                className="border-b border-[#E0E0E5]"
              >
                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="group flex w-full items-center justify-between gap-4 py-4 text-left sm:py-[18px]"
                >
                  <span className="text-[15px] font-semibold text-[#22222A] transition-colors duration-200 group-hover:text-[#0046E5] sm:text-[16px] lg:text-[17px]">
                    {item.question}
                  </span>

                  {/* ARROW */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                      isOpen
                        ? "bg-[#EAF0FF] text-[#0046E5]"
                        : "text-[#33333D] group-hover:bg-[#F2F5FA]"
                    }`}
                  >
                    <ChevronDown
                      size={19}
                      strokeWidth={2}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                {/* ANSWER */}
                <div id={answerId} hidden={!isOpen}>
                  <div className="pb-5 pr-8 text-[13px] leading-[1.75] text-[#555560] sm:pr-12 sm:text-[14px]">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
