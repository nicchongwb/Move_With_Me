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

    // JSON Payload for AXIOS
    const payload = {
        "challenge": props.challenge
    };

    const headers = {
        'Access-Control-Allow-Origin':'http://localhost:5000'
      }

    function isArrayInArray(arr, item){
        var item_as_string = JSON.stringify(item);

      console.log("test", item_as_string);

      var contains = arr.some(function (e) {
        return JSON.stringify(e) === item_as_string;
      });

      return contains;
    }

    const [loading, setLoading] = useState(false);

    const renderMap = () => {
      //console.log("TILES " + tiles);
      let cCar = [props.x, props.y];
      for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
          var cTile = [i, j];
          let keyID = "x" + i + "y" + j;
          // console.log("cCar :" + JSON.stringify(cCar));
          // console.log("cTile : " + JSON.stringify(cTile));

          // Check if tile HTML element match with Car position
          // If Match, render orange else ( green || white )
          if (JSON.stringify(cTile) == JSON.stringify(cCar)) {
            console.log("cTile match cCar at " + cCar);
            const htmlTile = (
              <React.Fragment>
                <span
                  key={keyID}
                  id={keyID}
                  className={"tile button orangeTile"}
                >
                  {/*"[" + horizontalAxis[i]},{verticalAxis[j] + "]"*/}
                </span>
              </React.Fragment>
            );
            setBoard((board) => [...board, htmlTile]);
          } else {
            if (isArrayInArray(tiles, cTile)) {
              //console.log(cTile + " found");
              const htmlTile = (
                <React.Fragment>
                  <span
                    key={keyID}
                    id={keyID}
                    className={"tile button greenTile"}
                  >
                    {/*"[" + horizontalAxis[i]},{verticalAxis[j] + "]"*/}
                  </span>
                </React.Fragment>
              );
              setBoard((board) => [...board, htmlTile]);
            } else {
              //console.log(cTile + " not found");
              const htmlTile = (
                <React.Fragment>
                  <span
                    key={keyID}
                    id={keyID}
                    className={"tile button whiteTile"}
                  >
                    {/*"[" + horizontalAxis[i]},{verticalAxis[j] + "]"*/}
                  </span>
                </React.Fragment>
              );
              setBoard((board) => [...board, htmlTile]);
            }
          }
        }
      }
    };

    // AXIOS
    const getChallenge = () => {
        axios.post('/api/map', payload, headers)
        .then(function(response){
            console.log(response.data)
            setTiles(response.data.tiles)
        });
        setLoading(true);
    }

    const tileLoaded = useRef(true); // Ref Hook for boolean condition and to not rerender during change in state

    // Render Map only AFTER first render and when tiles have been loaded from AXIOS
    useEffect(() => {
        if (!tileLoaded.current){
            renderMap();
            console.log("Map RENDERED...");
        }
    }, [tiles]);

    // Get the challenge data from mongo via AXIOS to load into tiles STATE
    useEffect(() => {
        getChallenge();
        tileLoaded.current = false;

        console.log("CarPosition Updated...");
        // Clearboard to clean up DOM before rerender
        setBoard([]); // Reset Board
        console.log('Board State is cleared...')
    }, [props.x, props.y]);

    // return <div id="board">{board}{tiles}{props.x}{props.y}</div>;
    return <div id="board">{board}</div>;
}

export default GameMap;
  