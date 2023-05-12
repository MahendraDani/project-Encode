import React from "react";
import NavMenu from "../navbar/NavMenu";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <NavMenu />
      <div className="w-full h-screen bg-gradient-to-b from-[#023e8a] to-[#0096c7]">
        <div className="w-full h-screen">
          <div className="w-full h-screen flex justify-center items-center gap-4">
            {/* Form container */}
            <div className="w-auto bg-slate-700 rounded-2xl p-4">
              <div className="text-center">
                <h2 className="font-mono text-4xl pb-10 px-4 font-extrabold text-sky-500">
                  LOGIN
                </h2>
              </div>
              {/* Each label and its input */}
              <div className="flex justify-between items-center gap-4 font-mono pb-5 text-sky-500">
                <label for="name" className="text-xl">
                  Email
                </label>
                <input
                  type="email"
                  id="name"
                  className="font-mono px-2 rounded-md focus:outline-none text-lg"
                  placeholder="Jhon@gmail.com"
                />
              </div>

              <div className="flex justify-between items-center gap-4 font-mono pb-10 text-sky-500">
                <label for="name" className="text-xl">
                  Password
                </label>
                <input
                  type="password"
                  id="name"
                  className="font-mono px-2 rounded-md focus:outline-none text-lg"
                  placeholder="Your password"
                />
              </div>

              <div className="text-center">
                <Link>
                  <button className="text-xl font-mono px-6 py-1 rounded-full bg-[#0077b6] text-white hover:scale-105 duration-200">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
