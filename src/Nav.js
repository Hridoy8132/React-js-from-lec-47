import React from 'react'
import{Link} from 'react-router-dom';



function Nav() {
  return (
    <div>
         <Link to="/" >Home</Link>
        <br></br>
        <Link to="/about" >About</Link>
      
    </div>
  )
}

export default Nav;

