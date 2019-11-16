import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core/styles';
import AppDrawer from '../components/AppsDrawer';
import VoCard from '../components/Card';

const useStyles = makeStyles((theme)=>({
  toolbar:{
    marginTop : theme.spacing(2),
    marginBottom:theme.spacing(5),
    borderTop : `1px solid ${theme.palette.divider}`,
    borderBottom:`1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex:1,
    fontSize:'1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },    
  },

  card : {
    marginTop : theme.spacing(1),
    display:'flex',
    alignItems:'centre',
    justifyContent: 'flex-end',
  }
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
      <Grid  
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justify="center"
        // style={{ minHeight: '100vh' }} 
      >
        <Grid item xs={12}>
        <VoCard/>
        </Grid>

      </Grid>
    </Container>
    </React.Fragment>
  );
};

