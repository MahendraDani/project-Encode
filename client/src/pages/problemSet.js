import React, { useEffect, useState } from "react";
import NavMenu from "../components/navbar/NavMenu";

const ProblemSet = () => {
  const [problems, setProblems] = useState([]);

  //pass token as a header
  const getProblems = async () => {
    try {
      const response = await fetch("http://localhost:5000/problems", {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("accessToken"),
        },
      });
      const json = await response.json();
      setProblems(json.PROBLEMS);
      return <p>{json}</p>;
    } catch (err) {
      console.log(err);
    }
  };

  //useEffect to call the function getProblems everytime window is reloaded
  useEffect(() => {
    getProblems();
  }, []);

  const problemTitle = problems?.map((problem) => {
    return (
      <div className="font-mono border-2 border-black p-2 my-2 flex justify-between gap-4 items-center">
        <p className=""> {problem.title}</p>
        <p className="">{problem.problemStatement}</p>
        <p>{problem.acceptance}</p>
        <p>{problem.difficulty}</p>
      </div>
    );
  });
  return (
    <div>
      <NavMenu />
      {/* Problems */}
      <div className="mt-16 h-screen w-full bg-gradient-to-b from-[#023e8a] to-[#0096c7]">
        <div className="w-[75%] mx-auto">
          <div>
            <ul className="flex">
              <li>Problem Id</li>
              <li>Title</li>
              <li>Acceptance Rate</li>
              <li>difficulty</li>
            </ul>
          </div>
          <div>{problemTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSet;
