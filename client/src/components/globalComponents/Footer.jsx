import React from "react";

function Footer (){
  const year = new Date().getFullYear();

  return (
    <div style={{backgroundColor:'grey', height:'5rem', position:'relative'}}>
      <h1> &copy; {year} </h1>
    </div>
  )
}

export default Footer;  