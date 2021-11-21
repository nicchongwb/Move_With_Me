import React, { useEffect, useState } from "react";
import axios from 'axios'

function Game() {
    // eg. step = state, setStep = function to update state
    const [step, setStep] = useState(0)
    const [connection, setConnnection] = useState('Connected')
    const [status, setStatus] = useState('runnning')
    const [username, setUsername] = useState('Belle')
    const [challenge, setChallenge] = useState(3)
    const [position, setPosition] = useState({ x: 0, y: 0})
    const x = position.x
    const y = position.y

    // Update gamestatus
    function gameStatus(str){
        setStatus(prevStatus => str)
    }

    function moveCar(newX, newY){
        setPosition(prevPosition => {
            return { x: prevPosition + newX, y: prevPosition + newY}
        })
    }

    function increment(){
        setStep(prevStep => prevStep + 1)
    }

    // Run when status changes from FLASK response
    useEffect(() => {
        
    }, [status]);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Package json payload from states, don't need to JSONStringify as Axios will serialize for us
        const payload = {
            "username": username,
            "challenge": challenge,
            "position":  [x,y],
            "status": status,
            "step": step
        };

        // AXIOS to send a post req to api endpoint in FLASK
        // response.data.<key>
        return axios.post('/api/game', payload)
        .then(function(response){
            console.log(response.data)
            // Update state of game from res of FLASK
            setStatus(response.data.status)
        });
    }

    return (
        <>
        <span>Steps taken : {step}</span>
        <button onClick={increment}>+</button><br></br>
        <span>Username : {username}</span><br></br>
        <span>Challenge : {challenge}</span><br></br>
        <span>Is Game still running? : {status}</span><br></br>
        <span>Connection to Car: {connection}</span><br></br>
        <span>Position : [{x}, {y}]</span><br></br>
        <form onSubmit={handleSubmit}>
            <button type='submit'>MOVE CAR</button>
        </form>
        </>
    )
}

export default Game
