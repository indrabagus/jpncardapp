import React from 'react';
const AppContext = React.createContext({});


export function AppCtxProvider(props){
  const [appState,setAppState] = React.useState({
    isAuthenticate:false,
    isLocal:true,
    token:null,
    currUrl:null,
    cardTitle:null
  });

  React.useEffect(
    function(){
      if(localStorage.getItem('token')){
        setAppState(prevState=> {
          return {
            ...prevState,
            isAuthenticate:true,
            isLocal:true,
            token:localStorage.getItem('token'),
          }});
      }else if(sessionStorage.getItem('token')){
        setAppState(prevState=>{
          return {
            ...prevState,
            isAuthenticate:true,
            isLocal:false,
            token:sessionStorage.getItem('token'),
          }});
      }
      let url = localStorage.getItem('current-url');
      let title = localStorage.getItem('current-title');
      if(!url){
        localStorage.setItem('current-url','/genki/random/1');
        url = '/genki/random/1';
      }
      if(!title){
        title= 'Genki Volume 1 Card';
        localStorage.setItem('current-title',title);
      }
      setAppState(prevState=>{
        return {
          ...prevState,
          currUrl:url,
          cardTitle:title
        }});

    },[]
  );

  function stateAction(action){
    switch(action.type){
      case "SIGNIN" :
        action.payload.isLocal ?
          localStorage.setItem("token",action.payload.token)
          :
          sessionStorage.setItem("token",action.payload.token);
          setAppState(prevState=>{
            return{
              ...prevState,
              isAuthenticate:true,
              isLocal:action.payload.isLocal,
              token:action.payload.token,
          }});
      break;
  
      case "SIGNOUT":
        appState.isLocal ? 
          localStorage.clear() : sessionStorage.clear();
        setAppState(prevState=>{
          return {
            ...prevState,
            isAuthenticate:false,
            isLocal:true,
            token:null,
        }});
      break;

      case "CHANGECARD":
        setAppState(prevState=>{
          return{
            ...prevState,
            currUrl:action.payload.currUrl,
            cardTitle:action.payload.cardTitle
        }});
        localStorage.setItem('current-url',appState.currUrl);
        localStorage.setItem('current-title',appState.cardTitle);
      break;
  
      default:
        return null;
    }
  }  
  return(
    <AppContext.Provider
      value={{
        state:appState,
        action: stateAction
      }}    
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
