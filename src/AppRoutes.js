import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import ColorForm from "./ColorForm";

const AppRoutes = ({colors}) => {
  
  return (
      <Switch>
        <Route exact path="/colors">
          <Colors colors={colors} />
        </Route>
        
        <Route exact path="/colors/form">
          <ColorForm />
        </Route>
        <Route exact path="/colors/:color">
          <Color />
        </Route>
        <Redirect to="/colors" />
      </Switch>
  );
};

export default AppRoutes;
