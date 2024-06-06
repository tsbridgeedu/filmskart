import React, { useState } from "react";
import { questions } from "../../constants/constant";
import SingleQuestion from "./SingleQuestion";

const Faq = () => {
  const [cards] = useState(questions);
  return (
    <section className="max-w-xl mx-auto py-20 px-4">
      <div className="w-full flex justify-center items-center mb-10">
        <h1 className="text-center uppercase tracking-widest font-bold mb-8 border-b-2 border-red-500 text-[28px] ">
          Faqs
        </h1>
      </div>

      <section className="grid grid-cols-1 gap-8">
        {cards.map((card, index) => (
          <SingleQuestion {...card} key={index} />
        ))}
      </section>
    </section>
  );
};

export default Faq;
