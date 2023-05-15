import React, { useState } from "react";
import NavMenu from "../navbar/NavMenu";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const json = await response.json();
    console.log(json);
  };
  return (
    <>
      <NavMenu />
      <div className="w-full h-screen bg-gradient-to-b from-[#023e8a] to-[#0096c7]">
        <div className="w-full h-screen">
          <div className="w-full h-screen flex justify-center items-center gap-4">
            {/* Form container */}
            <div className="w-[60%] h-auto md:w-[25%] bg-slate-700 rounded-2xl p-4">
              <div className="text-center">
                <h2 className="font-mono text-4xl pb-5 px-4 font-extrabold text-sky-500">
                  LOGIN
                </h2>
              </div>
              <form onSubmit={handleLogin}>
                {/* Each label and its input */}
                <div className="flex  flex-col justify-between items-left gap-2 font-mono pb-5 text-sky-500">
                  <label for="name" className="text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    id="name"
                    className="font-mono px-2 rounded-md focus:outline-none text-lg text-gray-800"
                    placeholder="Jhon@gmail.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col justify-between items-left gap-2 font-mono pb-10 text-sky-500">
                  <label for="name" className="text-xl">
                    Password
                  </label>
                  <input
                    type="password"
                    id="name"
                    className="font-mono px-2 rounded-md focus:outline-none text-lg text-gray-800"
                    placeholder="Your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="text-center">
                  <button
                    className="text-xl font-mono px-6 py-1 rounded-full bg-[#0077b6] text-white hover:scale-105 duration-200"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
