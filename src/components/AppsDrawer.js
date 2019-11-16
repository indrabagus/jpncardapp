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
import {Link} from 'react-router-dom';

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
        <ListItem button component='a' href="#">
          <ListItemIcon><LockIcon/></ListItemIcon>
          <ListItemText primary="Signout"/>
        </ListItem>
        
      </List>
    </Drawer>
  );
}