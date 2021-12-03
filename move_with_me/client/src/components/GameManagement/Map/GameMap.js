import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';

import "./GameMap.css";

const GameMap = (props) => {
    const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const [board, setBoard] = useState([]);
    const [hover, setHover] = useState();
    const [cmd, setCmd] = useState([]) // to keep track of set state
    const [tiles, setTiles] = useState([]) // to keep track of tiles of challenge for render
    const [carPosition, setCarPos] = useState([props.x, props.y]) // State of car position from props

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

    const payload = {
        "challenge": 1
    };

    function isArayInArray(arr, item){
        var item_as_string = JSON.stringify(item);

        var contains = arr.some(function(e){
            return JSON.stringify(e) === item_as_string;
        });
        return contains;
    }

    const renderCar = () => {
        return true;
    };

    //const tileLoaded = useRef(false) // ref for async trigger
    const [loading, setLoading] = useState(false);

    const renderMap = () => {
        //console.log("TILES " + tiles);
        for (let j = verticalAxis.length - 1; j >= 0; j--){
            for (let i = 0; i < horizontalAxis.length; i++){
                var cTile = [i, j]

                if (isArayInArray(tiles, cTile)){
                    //console.log(cTile + " found");
                    const htmlTile = <React.Fragment><span id={'x' + i + 'y' + j} className="tile button button1clicked">
                    [{horizontalAxis[i]},{verticalAxis[j]}]</span></React.Fragment>
                    setBoard(board => [...board, htmlTile]);
                } else {
                    //console.log(cTile + " not found");
                    const htmlTile = <React.Fragment><span id={'x' + i + 'y' + j} className="tile button button2">
                    [{horizontalAxis[i]},{verticalAxis[j]}]</span></React.Fragment>
                    setBoard(board => [...board, htmlTile]);
                }
            }
        }
    }

    // AXIOS
    const getChallenge = () => {
        axios.get('/api/map', payload)
        .then(function(response){
            console.log(response.data)
            setTiles(response.data.tiles)
        });
        setLoading(true);
    }

    const tileLoaded = useRef(true); // ref hook
    // Render map data only after challenge data is fetched | has to be ontop
    useEffect(() => {
        let targetID = 'x' + props.x + 'y' + props.y;
        if (!tileLoaded.current){
            renderMap();
        }
    }, [tiles]);

    // Re-render map when car position updates
    useEffect(() =>{
        renderCar();
    }, [carPosition]);

    // Option B
    // useEffect(() => {
    //     let targetID = 'x' + props.x + 'y' + props.y;
    //     if (!tileLoaded.current){
    //         renderMap();
    //         renderCar();
    //     }
    // }, [tiles, carPosition]);

    // Get the challenge data from mongo
    useEffect(() => {
        getChallenge();
        tileLoaded.current = false;
    }, []);

    // return <div id="board">{board}{tiles}{props.x}{props.y}</div>;
    return <div id="board">{board}{props.x}{props.y}</div>;
}

export default GameMap;
  