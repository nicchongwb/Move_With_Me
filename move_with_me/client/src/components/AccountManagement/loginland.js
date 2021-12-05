import React, { useState } from "react";
import { useHistory } from "react-router";

const Loginland = () => {

    const token = sessionStorage.getItem("token");
    let history = useHistory();

    const clickHandler = () => {
        // const opts = {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        history.push('/admlogin');
        sessionStorage.removeItem("token");
        localStorage.clear();
        // window.location.reload();
    }
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        Welcome admin
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                        type="submit"
                        onClick={clickHandler}>
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Loginland;