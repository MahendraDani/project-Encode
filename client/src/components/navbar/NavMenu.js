import React, { useState } from "react";
import NavLogo from "./NavLogo";
import SignupLink from "./navlinks/SignupLink";
import LoginLink from "./navlinks/LoginLink";
import HomepageLink from "./navlinks/HomepageLink";
import ProblemSet from "./navlinks/ProblemSet";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavMenu = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      {/* Sticky container */}
      <div className="w-full h-16 bg-gradient-to-r from-gray-800 to-gray-600 sticky top-0 px-4">
        {/* Width container -flex */}
        <div className="md:w-[75%] mx-auto h-16 flex items-center justify-between">
          <div>
            <NavLogo />
          </div>
          {/* Navlinks container  for medium-large screen*/}
          <nav className="hidden md:flex items-center justify-between gap-4">
            <div>
              <HomepageLink />
            </div>
            <div>
              <ProblemSet />
            </div>
            <div>
              <SignupLink />
            </div>
            <div>
              <LoginLink />
            </div>
          </nav>

          <div
            className="text-xl md:hidden hover:text-2xl cursor-pointer duration-300 text-sky-500 font-bold"
            onClick={handleNav}
          >
            {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          {/* Navlinks for mobile screens */}
          <nav
            className={
              !nav
                ? "flex flex-col items-center justify-centre gap-4 fixed top-16 right-0 bg-gradient-to-b w-[50%] h-full from-gray-800 to-gray-600 md:hidden ease-in-out duration-300 pt-[30%]"
                : "fixed right-[-100%] pt-[30%]"
            }
          >
            <div>
              <HomepageLink />
            </div>
            <div>
              <ProblemSet />
            </div>
            <div>
              <SignupLink />
            </div>
            <div>
              <LoginLink />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
