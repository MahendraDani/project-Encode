import React from "react";
import { Link } from "react-router-dom";

const SignupLink = () => {
  return (
    <div>
      <Link to={"/signup"}>
        <p className="text-lg text-white font-mono px-3 py-1 hover:bg-sky-500 hover:text-gray-800 duration-300 rounded-full">
          Signup
        </p>
      </Link>
    </div>
  );
};

export default SignupLink;
