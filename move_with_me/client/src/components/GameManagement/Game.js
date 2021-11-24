import React, { useEffect, useState } from "react";
import axios from 'axios'

function Game() {
    // eg. step = state, setStep = function to update state
    const [cmd, setCmd] = useState([])
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

    // Update position after response from Flask
    function moveCar(newX, newY){
        setPosition(prevPosition => {
            return { x: prevPosition + newX, y: prevPosition + newY}
        })
    }

    // Temp function
    function increment(){
        setStep(prevStep => prevStep + 1)
    }

    // Function to Add commands to command tray, direction will be a char "L", "R", "U", "D"
    function addCmd(direction, e){
        setCmd([ ...cmd, direction])
    }

    function dropCmd(e){
        setCmd(prevCmd => {
            // 1. Clone array by destructuring
            // 2. Use pop to remove last item in array
            const next = [ ...cmd ];
            next.pop()
            return next;
        })
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
        <span>Current Position : [{x}, {y}]</span><br></br><br></br>

        <button onClick={(e) => {addCmd("L",e)}}>Move Left</button><br></br>
        <button onClick={(e) => {addCmd("R",e)}}>Move Right</button><br></br>
        <button onClick={(e) => {addCmd("U",e)}}>Move Up</button><br></br>
        <button onClick={(e) => {addCmd("D",e)}}>Move Down</button><br></br>
        <button onClick={(e) => {dropCmd(e)}}>Pop Command Block</button><br></br>
        <span>Command Tray: {cmd.map(item => <span>{item[0]}</span>)}</span><br></br>

        <form onSubmit={handleSubmit}>
            <button type='submit'>MOVE CAR</button>
        </form>
        </>
    )
}

export default Game
