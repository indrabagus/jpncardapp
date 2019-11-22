import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import SwitchRoute from './services/jcardRouter';
function App() {

  return (
    <Router>
      <SwitchRoute/>
    </Router>
  );
}

export default App;
