import React,{useEffect,useState} from 'react';
import {getToken} from './services/jcardApi';
import MainContainer from './containers/Main';

// import {getToken} from './services/jcardApi'
function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    // getToken('guest','kumamotox')
    // .then(result => setToken(result.token))
    // .catch(err=>{
    //   console.log("ERROR=>",err);
    //   setToken(err.response.data.error);
    // });
  }, []);

  return (
    <MainContainer/>
  );
}

export default App;
