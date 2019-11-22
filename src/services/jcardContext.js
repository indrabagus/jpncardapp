import React from 'react';
const AppContext = React.createContext({});


export function AppCtxProvider(props){
  const [appState,setAppState] = React.useState({
    isAuthenticate:false,
    isLocal:true,
    token:null
  });

  React.useEffect(
    function(){
      if(localStorage.getItem('token')){
        setAppState({
          isAuthenticate:true,
          isLocal:true,
          token:localStorage.getItem('token')
        });
      }else if(sessionStorage.getItem('token')){
        setAppState({
          isAuthenticate:true,
          isLocal:false,
          token:sessionStorage.getItem('token')
        });
      }

    },[]
  );

  function stateAction(action){
    switch(action.type){
      case "SIGNIN" :
        action.payload.isLocal ?
          localStorage.setItem("token",action.payload.token)
          :
          sessionStorage.setItem("token",action.payload.token);
          setAppState({
            isAuthenticate:true,
            isLocal:action.payload.isLocal,
            token:action.payload.token
          });
      break;
  
      case "SIGNOUT":
        appState.isLocal ? 
          localStorage.clear() : sessionStorage.clear();
        setAppState({
          isAuthenticate:false,
          isLocal:true,
          token:null
        });
      break;
  
      default:
        return null;
    }
  }  
  return(
    <AppContext.Provider
      value={{
        authstate:appState,
        action: stateAction
      }}    
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
