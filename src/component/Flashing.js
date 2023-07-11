import React from 'react'
import "../CSS_folder/Flashing.css";
import { useState,useEffect } from 'react';

function Flashing() {
  const [color, setColor] = React.useState("#ffd83a"); 

  React.useEffect(() => {
    const interval = setInterval(() => {
      color == "#ffd83a" ? setColor("#ffffff") : setColor("#ffd83a");
    }, 500); 

    return () => clearInterval(interval); 
  }, [color]);
  return (
    <div style={{ backgroundColor: "black", color }} className="Flashing_container">
      <div>~ Enter the promotion code 'SUMMER2023' to get 5% off during the checkout ~</div>
    </div>
  );
}

export default Flashing;