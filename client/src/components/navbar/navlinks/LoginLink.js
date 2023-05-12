import React from "react";
import { Link } from "react-router-dom";

const LoginLink = () => {
  return (
    <div>
      <Link to={"/login"}>
        <p className="text-lg font-mono px-3 py-1 bg-sky-400 hover:bg-sky-500 text-gray-800 ease-in-out duration-200 rounded-full">
          Login
        </p>
      </Link>
    </div>
  );
};

export default LoginLink;
