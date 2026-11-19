
import ResultCard from "./ResultCard";
import Footer from "../../common/Footer";

function ResultList({ results = [] }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
        {results.map((card) => (
          <ResultCard
            key={card.id}
            {...card}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default ResultList;
