import React from "react";
import { Link } from "react-router-dom";

function Header (){

  return (
    <div style={{backgroundColor:'grey', height:'5rem' }}>
      <Link style={{textDecoration:'none', fontSize:'1.5rem', padding:'.5rem', color: "black"}} to="/">Home</Link>
      <Link style={{textDecoration:'none', fontSize:'1.5rem', padding:'.5rem', color: "black"}} to="/Cooking">Cooking</Link>
      <Link style={{textDecoration:'none', fontSize:'1.5rem', padding:'.5rem', color: "black"}} to="/Gaming">Gaming</Link>
    </div>
  )
}

export default Header;