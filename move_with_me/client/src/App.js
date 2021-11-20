import React, { useState, useEffect } from 'react'
import "tailwindcss/tailwind.css";

function App() {
  const [data, setData] = useState([{}]);

  // useEffect will fetch data from /members of Flask
  useEffect(() => {
    fetch("/members")
      .then(
        // Response from /members will be json
        (res) => res.json()
      )
      .then(
        // set data inside json to variable named data
        (data) => {
          setData(data);
          console.log(data);
        }
      );
  }, []);

  return (
    <div>
      {/* {typeof data.members === "undefined" ? (
        ) : (
          data.members.map((member, i) => <p key={i}>{member}</p>)
        )} */}
    </div>
  );
}

export default App
