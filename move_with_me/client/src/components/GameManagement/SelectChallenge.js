import React, { useState } from "react";

const data = [
  {
    _uid: "1",
    component: "challenge",
    headline: "Challenge"
  },
  {
    _uid: "2",
    component: "challenge",
    title: "Challenge"
  },

]

function NumberList(props) {
  const challenges = props.challenges;
  const listItems = challenges.map((challenge) =>

    <button key={challenge._uid} class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">{challenge._uid}</button>

  );
  return (
    <div>{listItems}</div>
  );
}

const numbers = [1, 2, 3, 4, 5];

const SelectChallenge = () => {
  return (

    <div class="flex h-screen">
      <div class="m-auto">
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">Select Your Challenge</h2>
            <NumberList challenges={data}/>
          </div>
        </div>
      </div>
    </div>

  );
};
export default SelectChallenge;
