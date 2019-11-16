import React,{useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import SwitchRoute from './services/jcardRouter';
function App() {
  // const [token, setToken] = useState();
  useEffect(() => {
  }, []);

  return (
    <Router>
      <SwitchRoute/>
    </Router>
  );
}

export default App;
