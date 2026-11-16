
import React from "react";

import resultData from "./ResultData";
import ResultCard from "./ResultCard";

function ResultList() {
  return (
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
  );
}

export default ResultList;
