import React from "react";
import { Link } from "react-router-dom";

const ProblemSet = () => {
  return (
    <div>
      <Link to={"/problems"}>
        <p className="text-lg text-white font-mono px-3 py-1 hover:bg-sky-500 hover:text-gray-800 ease-in-out duration-200 rounded-full">
          Problems
        </p>
      </Link>
    </div>
  );
};

export default ProblemSet;
