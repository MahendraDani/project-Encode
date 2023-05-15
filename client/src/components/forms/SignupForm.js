import React, { useState } from "react";
import NavMenu from "../navbar/NavMenu";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
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
      <div className="w-full h-screen bg-gradient-to-b from-[#023e8a] to-[#0096c7] ">
        <div className="w-full h-screen]">
          <div className="w-full h-screen flex justify-center items-center gap-4">
            {/* Form container */}
            <div className="w-auto bg-slate-700 rounded-2xl p-4">
              <div className="text-center">
                <h2 className="font-mono text-4xl pb-10 px-4 font-extrabold text-sky-500">
                  SIGN UP
                </h2>
              </div>
              {/* Each label and its input */}

              <form onSubmit={handleSignup}>
                <div className="flex justify-between items-center gap-4 font-mono pb-5 text-sky-500">
                  <label for="name" className="text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="font-mono px-2 rounded-md focus:outline-none text-lg text-black"
                    placeholder="Jhon Doe"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex justify-between items-center gap-4 font-mono pb-5 text-sky-500">
                  <label for="name" className="text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    id="name"
                    className="font-mono px-2 rounded-md focus:outline-none text-lg text-gray-800"
                    placeholder="jhon@gmail.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="flex justify-between items-center gap-4 font-mono pb-10 text-sky-500">
                  <label for="name" className="text-xl">
                    Password
                  </label>
                  <input
                    type="password"
                    id="name"
                    className="font-mono px-2 rounded-md focus:outline-none text-lg text-gray-800"
                    placeholder="Jhon's password"
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
                    Sign up
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

export default SignupForm;
