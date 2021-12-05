// import React, { Component, useState } from 'react'

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const clickHandler = () => {
//     const opts = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             "username": username,
//             "password": password
//         })
//     }
//     fetch('http://localhost:5000/users', opts)
//         .then(resp => {
//             if(resp.status === 200) return resp.json();
//             else alert("error");
//         })
//         .then()
//         .catch(error => {
//             console.error("erorr2", error);
//         })
//   }

//   return (
//     <div className="container">
//       <div className="row">
//           <div className="col-md-6 mt-5 mx-auto">
//             <h1 className="h3 mb-3 font-weight-normal">Register</h1>
//             <div className="form-group">
//                 <label htmlFor="text">Username</label>
//                 <input type="text"
//                     className="form-control"
//                     name="first_name"
//                     placeholder="Enter username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="password">Password </label>
//                 <input type="password"
//                     className="form-control"
//                     name="password"
//                     placeholder="Enter Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button onClick={clickHandler} type="submit" className="btn btn-lg btn-primary btn-block">
//                 Register
//             </button>
//           </div>
//       </div>
//     </div>
//   );
// };
// export default Register;
  