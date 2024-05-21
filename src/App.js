// // Lec-47 start Routing setup:
// import './App.css';
// import React from 'react'
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Link to="/home" >Home</Link>
//         <br></br>
//         <Link to="/about" >About</Link>
//         <Route path="/home" > <Home /></Route>
//         <Route path="/about" > <About /></Route>

//       </Router>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>This is my Home Page</p>
//     </div>
//   )
// }
// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is my About Page</p>
//     </div>
//   )
// }
// export default App;
// // Lec-47 end Routing setup:

// Lec-48 Routing with example:

// import './App.css';
// import React from 'react';
// import { Link, Route, BrowserRouter as Router  } from 'react-router-dom';
// import Nav from './Nav';
// import Home from './Home'
// import About from './About'

// function App() {
//   return (
//     <div className="App">
//       <Router>

//        <Nav/>

//         <Route path="/about" > <About /></Route>
//         <Route path="/"  exact = {true}> <Home /></Route>

//       </Router>
//     </div>
//   );
// }

// export default App;

// Lec-48 end Routing with example:

// Lec-50  start Dynamic Routing

// import "./App.css";
// import React from "react";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import User from "./User";
// function App() {
//   let user = [
//     { name: "anil", id: 1 },
//     { name: "peter", id: 2 },
//     { name: "bruce", id: 3 },
//     { name: "tony", id: 4 },
//   ];
//   return (
//     <div className="App">
//       <Router>
//         <h1>React Dynamic Routing</h1>
//         {user.map((item) => (
//           <div>
//             <Link to={"/user/" + item.id + "/" + item.name}>{item.name}</Link>
//           </div>
//         ))}
//         <Route path="/user/:id/:name">
//           <User />
//         </Route>
//       </Router>
//     </div>
//   );
// }
// export default App;

// Lec-50  end  Dynamic Routing

// Lec-51 start fetch API | Get method

// import "./App.css";
// import React, { useEffect, useState } from "react";
// function App() {
//   const [users, setUser] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:4000/todo").then((result) => {
//       result.json().then((resp) => {
//         // console.warn(resp)
//         setUser(resp);
//       });
//     });
//   }, []);
//   console.warn(users);
//   return (
//     <div className="App">
//       <h1>Get API Call </h1>
//       <table border="1">
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Mobile</td>
//           </tr>
//           {users.map((item, i) => (
//             <tr key={i}>
//               <td>{item.userId}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.mobile}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;

// Lec-51 End fetch API | Get method

// Lec-53 start Post method in Rest API


import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [mobile,setMobile]=useState("");
function saveData()
{
  let data={name,email,mobile}
// console.warn(data);
  fetch("http://localhost:4000/todo", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="App">
      <h1>POST API Example </h1>  
      <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
}
export default App;
// Lec-53 end Post method in Rest API
