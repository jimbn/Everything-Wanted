import React, {useState} from "react";

function Time () {
  // grab local time
  let now = new Date().toLocaleTimeString();

  // useState to update clock
  const [time, setTime] = useState(now);

  // update function to setTime as newTime
  function newTime (){
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime);
  };

  // set interval outside of return. state will auto change on interval.
  setInterval(newTime, 1000);

  return(
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default Time;