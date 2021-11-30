import React, { useState } from "react";

const Login = () => {
    return (
        <header class="bg-gray-900 pattern">
            <div class="container px-6 mx-auto">
                <nav class="flex flex-col py-2 sm:flex-row sm:justify-between sm:items-center">
                    <div>
                        <a href="#" class="text-2xl font-semibold text-white hover:text-gray-300">ICT2x01</a>
                    </div>

                    <div class="flex items-center mt-2 -mx-2 sm:mt-0">
                        <a href="/admLogin" class="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800">Admin login</a>
                    </div>
                </nav>

                <div class="flex flex-col items-center py-6 lg:h-128 lg:flex-row">
                    <div class="lg:w-1/2">
                        <h2 class="text-4xl font-semibold text-gray-100">Move with Me</h2>

                        <h3 class="text-2xl font-semibold text-gray-100">
                            Hello <span class="text-indigo-400">Guest</span>
                        </h3>

                        <p class="mt-3 text-gray-100">Some text here..</p>
                    </div>

                    <div class="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                        <div class="max-w-sm bg-white rounded-lg dark:bg-gray-800">
                            <div class="p-5 text-center">
                                <h2 class="text-2xl font-semibold text-gray-700 dark:text-white fo">Student login</h2>
                                <h3 class="text-gray-600 dark:text-gray-200">Please enter your username with this format:</h3>
                                <h4 class="text-gray-600 dark:text-gray-200">ClassName-YourName</h4>

                                <form action="#">
                                    <div class="mt-4">
                                        <input class="block w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" placeholder="Username" aria-label="Username"></input>
                                        <input class="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password"></input>
                                    </div>

                                    <div class="flex items-center justify-center mt-4">

                                        <button class="px-4 py-2 font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700">Start playing!</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Login;