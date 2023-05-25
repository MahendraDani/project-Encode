import React, { useState } from "react";
import NavMenu from "../components/navbar/NavMenu";

const ProblemSet = () => {
  // const [problems, setProblems] = useState([]);
  // const getProblems = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/problems", {
  //       method: "GET",
  //     });
  //     const json = response.json();
  //     setProblems(json.problems);
  //     return <p>{json}</p>;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const PROBLEMS = [
    {
      id: 0,
      title: "Two sum",
      problemStatement:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      acceptance: "49.9%",
      difficulty: "Easy",
    },
    {
      id: 1,
      title: "Add two numbers",
      problemStatement:
        "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
      input: "l1 = [2,4,3], l2 = [5,6,4]",
      output: "[7,0,8]",
      acceptance: "40.50%",
      difficulty: "Medium",
    },
  ];

  const problemTitle = PROBLEMS.map((problem) => {
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
