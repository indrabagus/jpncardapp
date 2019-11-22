import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import SwitchRoute from './services/jcardRouter';
import {Config} from './services/jcConfig';
function App() {

  return (
    <Router basename={Config.url.BASENAME}>
      <SwitchRoute/>
    </Router>
  );
}

export default App;
