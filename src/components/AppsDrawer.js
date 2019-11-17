import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LockIcon from '@material-ui/icons/Lock';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import AuthContext from '../services/jcardContext'

const useStyles = makeStyles((theme)=>({
  toolBar : {
    display:'flex',
    alignItems:'centre',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar    
  },
  drawer:{},
}));

export default function AppDrawer(props){
  const classes = useStyles();
  const authctx = React.useContext(AuthContext);

  function onGetJCardHandler(url){
    localStorage.setItem('current-url',url); // save the url to local storage
    props.onGetCard(url);
  }
  return(
    <Drawer
      variant="temporary"
      open={props.open}
      onClose={props.onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}      
    >
      <div className={classes.toolBar}>
        <IconButton onClick={props.onClose}>
          <MenuIcon/>
        </IconButton>
      </div>
      <Divider/>
      <List>
      <ListItem button onClick={()=>onGetJCardHandler("/genki/random/1")}>
          <ListItemIcon><LockIcon/></ListItemIcon>
          <ListItemText primary="Genki Book Vol 1"/>
        </ListItem>

        <ListItem button onClick={()=>authctx.action({type:"LOGOUT"})}>
          <ListItemIcon><LockIcon/></ListItemIcon>
          <ListItemText primary="Sign Out"/>
        </ListItem>
        
      </List>
    </Drawer>
  );
}