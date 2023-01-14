import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import ColorForm from "./ColorForm";
// import AppRoutes from "./AppRoutes";
import './App.css';

function App() {
  const INITIAL_STATE = ['red', 'green', 'blue'];
  const [colors, setColor] = useState(INITIAL_STATE);
  const addColor = (color) => {
    setColor((colors) => [...colors, color])
    console.log('colors:', colors);
  };

  return (
    <div className="App">

      <Switch>
        <Route exact path="/colors">
          <Colors colors={colors} />
        </Route>
        
        <Route exact path="/colors/new">
          <ColorForm addColor={addColor} />
        </Route>
        <Route exact path="/colors/:color">
          <Color />
        </Route>
        <Redirect to="/colors" />
      </Switch>

      
    </div>
  );
}

export default App;
