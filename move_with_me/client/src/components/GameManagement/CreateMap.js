import React, { useEffect, useState } from "react";
import axios from 'axios';

import "./GameMap.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const CreateMap = () => {
    let board = []; // for render
    const [hover, setHover] = useState();
    const [cmd, setCmd] = useState([]) // to keep track of set state

    const handleMouseIn = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    const handleClick = (e) => {
        //console.log(e.target.getAttribute("id"));
        let eid = e.target.getAttribute("id");
        console.log(eid);
        // Get e bg color
        let ebgcolor = (window.getComputedStyle(e.target, null).getPropertyValue("background-color"));
        console.log(e.currentTarget.style.backgroundColor);
        document.getElementById(eid).style.backgroundColor = '#4CAF50';
    }

    for (let j = verticalAxis.length - 1; j >= 0; j--){
        for (let i = 0; i < horizontalAxis.length; i++){
            board.push(
                <button key={'x' + i + 'y' + j} id={'x' + i + 'y' + j} className="tile button button1" 
                onClick={ (e) => {handleClick(e)}}>
                    [{horizontalAxis[i]},{verticalAxis[j]}]
                </button>
            );
        }
    }

    return <div id="board">{board}</div>;
}

export default CreateMap;