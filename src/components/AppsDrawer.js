import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import {makeStyles} from '@material-ui/core/styles';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LockIcon from '@material-ui/icons/Lock';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ClassIcon from '@material-ui/icons/Class';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import AppContext from '../services/jcardContext'

const useStyles = makeStyles((theme)=>({
  toolBar : {
    display:'flex',
    alignItems:'centre',
    justifyContent: 'flex-end',
    padding: theme.spacing(0,1),
    ...theme.mixins.toolbar    
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  list:{
    width:250
  },
}));

export default function AppDrawer(props){
  const classes = useStyles();
  const appctx = React.useContext(AppContext);
  const [expand, setExpand] = React.useState(false);

  function onGetJCardHandler(url,title){
    // save all to the app context
    appctx.action({
      type:"CHANGECARD",
      payload:{
        currUrl : url,
        cardTitle:title
      }
    });
    props.onGetCard();
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
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider/>
      <List 
        className={classes.list}
        role="presentation"

      >
      <ListItem button onClick={()=>(setExpand(!expand))}>
        <ListItemIcon>
          <FormatListBulletedIcon/>
        </ListItemIcon>
        <ListItemText primary="Genki Book" />
        {expand ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List
          onClick={props.onClose}
          onKeyDown={props.onClose} 
          component="div" disablePadding
        >
          <ListItem 
            button 
            className={classes.nested}
            onClick={()=>onGetJCardHandler("/genki/random/1","Genki Volume 1")}
          >
            <IconButton> <ClassIcon/> </IconButton>
            <ListItemText primary="Genki Book Vol 1"/>
          </ListItem>

          <ListItem 
            button 
            className={classes.nested}
            onClick={()=>onGetJCardHandler("/genki/random/2","Genki Volume 2")}
          >
            <IconButton> <ClassIcon/> </IconButton>            
            <ListItemText primary="Genki Book Vol 2"/>
          </ListItem>
        </List>
      </Collapse>

        <ListItem button onClick={()=>appctx.action({type:"SIGNOUT"})}>
          <ListItemIcon><LockIcon/></ListItemIcon>
          <ListItemText primary="Sign Out"/>
        </ListItem>
        
      </List>
    </Drawer>
  );
}