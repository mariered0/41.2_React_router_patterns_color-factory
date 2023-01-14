import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import './Color.css';

const Color = () => {
  const { color } = useParams();
  console.log('param:', color);



  document.querySelector('body').style.backgroundColor = color;
  return (
    <div className="Color-div">
        <Link to="/colors">Home</Link>
    </div>
  );
};

export default Color;
