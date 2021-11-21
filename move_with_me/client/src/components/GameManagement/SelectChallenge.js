import React, { useState } from "react";
import { Button } from 'antd';

// const data = [
//   {
//     _uid: "1",
//     component: "challenge",
//     headline: "Challenge"
//   },
//   {
//     _uid: "2",
//     component: "challenge",
//     title: "Challenge"
//   },

// ]

// function NumberList(props) {
//   const challenges = props.challenges;
//   const listItems = challenges.map((challenge) =>

//     <button key={challenge._uid} class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">{challenge._uid}</button>

//   );
//   return (
//     <div>{listItems}</div>
//   );
// }

const numbers = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];


const SelectChallenge = () => {
  return (
    <div class="text-center container mx-auto px-4 space-x-32">
      <h2 class="text-4xl  font-semibold  pt-24">Select Your Challenge</h2>

      {/* <NumberList challenges={data}/> */}
      <div class="grid grid-rows-3 grid-flow-row grid-cols-6 gap-4">
        {numbers.map((numbers) => (
          <Button
            type="primary"
            style={{ fontSize: "25px", width: "3em", height: "3em" }}
          >
            {numbers}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default SelectChallenge;

