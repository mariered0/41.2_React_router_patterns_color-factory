import React from "react";
import { Link } from "react-router-dom";

//it receives array of colors.
const Colors = ({ colors }) => {
  console.log('colors', colors);

  document.querySelector('body').style.backgroundColor = 'white';

  return (
    <div className="Colors-div">
      <div className="Colors-form-link-div">
        <h1>Welcome to the color factory.</h1>
        <Link to="/colors/new">Add a color</Link>
      </div>

      <div className="Colors-nav">
        <p>Please select a color.</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {colors.map((color, idx) => (
            <li key={idx}><Link to={`/colors/${color}`}>{color}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Colors;
