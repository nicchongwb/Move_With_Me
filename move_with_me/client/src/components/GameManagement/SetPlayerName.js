import React, { useState } from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";

const SetPlayerName = () => {
  return (
    <div class="   background w-full min-h-screen opacity-80">
      <div class="pt-96 text-center">
        <h1 class="font-semibold text-5xl  text-white p-12 ">
          Set Player Name
        </h1>
        <form>
          <div class="">
            <div>
              <input
                id="username"
                type="text"
                class=" w-96 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></input>
            </div>
          </div>

          <div class="flex justify-center mt-6">
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Let's Go!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SetPlayerName;
