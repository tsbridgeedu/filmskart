import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border border-gray-400 rounded-lg bg-white">
      <article className="flex items-center justify-between p-4 lg:p-6">
        <h2
          className="cursor-pointer"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
        </h2>
        <ul>
          {!showAnswer ? (
            <li>
              <button
                className=" bg-red-500 rounded-full"
                onClick={() => setShowAnswer(true)}
              >
                <BsPlusLg className="text-white" />
              </button>
            </li>
          ) : (
            <li>
              <button
                className=" bg-red-500 rounded-full"
                onClick={() => setShowAnswer(false)}
              >
                <BiMinus className="text-white" />
              </button>
            </li>
          )}
        </ul>
      </article>

      {showAnswer && (
        <article className="border-t border-gray-400 p-4 lg:p-6">
          <p>{answer}</p>
        </article>
      )}
    </div>
  );
}
