import React from "react";

import resultData from "./ResultData";
import ResultCard from "./ResultCard";
import Footer from "../../common/Footer";

function ResultList() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
        {resultData.map((card) => (
          <ResultCard
            key={card.id}
            images={card.images}
            propertyType={card.propertyType}
            isNew={card.isNew}
            {...card}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ResultList;
