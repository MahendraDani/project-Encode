import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div>
      <Link to={"/"}>
        <h1 className="text-4xl sm:text-5l font-bold font-mono text-orange-400">
          En<span className="text-sky-400">Code</span>
        </h1>
      </Link>
    </div>
  );
};

export default NavLogo;
