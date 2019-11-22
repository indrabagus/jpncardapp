import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import AppContext from './jcardContext';
import SignIn from '../containers/SignIn';
import MainContainer from '../containers/Main';

export default function SwitchRoute(){
  const context = React.useContext(AppContext);
  if(context.state.isAuthenticate ===false){
    return(
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    );
  }else{
    return(
      <Switch>
        <Route path="/" exact component={MainContainer}/>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>

    );
  }

}