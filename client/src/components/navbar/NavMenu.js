import React from "react";
import NavLogo from "./NavLogo";
import SignupLink from "./navlinks/SignupLink";
import LoginLink from "./navlinks/LoginLink";
import HomepageLink from "./navlinks/HomepageLink";

const NavMenu = () => {
  return (
    <>
      {/* Sticky container */}
      <div className="w-full h-16 bg-gradient-to-r from-gray-800 to-gray-600 sticky top-0 px-4">
        {/* Width container -flex */}
        <div className="sm:w-[75%] mx-auto h-16 flex items-center justify-between">
          <div>
            <NavLogo />
          </div>
          {/* Navlinks container */}
          <nav className="flex items-center justify-between">
            <div>
              <HomepageLink />
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
