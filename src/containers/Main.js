import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core/styles';
import AppDrawer from '../components/AppsDrawer';


const useStyles = makeStyles((theme)=>({
  toolbar:{
    marginTop : 10,
    borderTop : `1px solid ${theme.palette.divider}`,
    borderBottom:`1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex:1,
    fontSize:24,
  },
}));

export default function MainContainer(props) {
  const classes = useStyles();
  const [drawerOpen,setDrawerOpen]=React.useState(false);

  const handleDrawerOpen = ()=>{
    setDrawerOpen(!drawerOpen);
  }

  return(
    <React.Fragment>
    <Container maxWidth='lg'>
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={handleDrawerOpen}>
          <MenuIcon/>
        </IconButton>
      <Typography 
        className={classes.toolbarTitle}
        component="h2"
        variant="h5"
        color="inherit"
        noWrap
      >
        Japan Card Application
      </Typography>

      </Toolbar>
      <AppDrawer
        open={drawerOpen}
        onClose={handleDrawerOpen}
      />
    </Container>
    </React.Fragment>
  );
};

