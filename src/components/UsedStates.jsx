import React from "react";
import { useState } from 'react'
const UsedStates = () => {
    const [text, setText]  = useState("Hello Messi")
const handleClick = () =>{
setText("Hi NeyMar")
}
const handleClicke = () => {
    setText ("We are ballers")

}
const handleMove = () => {
    setText("Hello Messi & Neymar")
}
 

  return (
    <section className="--Flex-center --100vh">
      <div className="container --bg-light">
        <h3>React page</h3>
        <h1 className="text">{text}</h1>
        <button className="--btn-lg --btn-primary --btn" onClick={handleClick} onMouseMove={handleClicke} onMouseOut ={handleMove}>Change Text</button>
      </div>
    </section>
  );
};

export default UsedStates;
