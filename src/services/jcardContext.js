import React from 'react';
const AuthContext = React.createContext({});
export const AuthCtxConsumer = AuthContext.Consumer;


export function AuthCtxProvider(props){
  const [authState,setAuthCtxState] = React.useState({
    isAuthenticate:false,
    isLocal:true,
    token:null
  });

  React.useEffect(
    function(){
      if(localStorage.getItem('token')){
        setAuthCtxState({
          isAuthenticate:true,
          isLocal:true,
          token:localStorage.getItem('token')
        });
      }else if(sessionStorage.getItem('token')){
        setAuthCtxState({
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
          setAuthCtxState({
            isAuthenticate:true,
            isLocal:action.payload.isLocal,
            token:action.payload.token
          });
      break;
  
      case "SIGNOUT":
        authState.isLocal ? 
          localStorage.clear() : sessionStorage.clear();
        setAuthCtxState({
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
    <AuthContext.Provider
      value={{
        authstate:authState,
        action: stateAction
      }}    
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
