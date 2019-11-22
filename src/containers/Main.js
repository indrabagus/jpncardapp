import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core/styles';

import AppDrawer from '../components/AppsDrawer';
import VoCard from '../components/Card';
import {getCardData} from '../services/jcardApi';
import AppContext from '../services/jcardContext';
import Copyright from '../components/Copyright';
import JpnSvg from '../assets/japan.svg';

const useStyles = makeStyles((theme)=>({

  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center',
    marginRight:theme.spacing(1),
  },

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
  },
  copyright :{
    marginTop:theme.spacing(3)
  }
}));

export default function MainContainer(props) {
  const classes = useStyles();
  const [drawerOpen,setDrawerOpen]=React.useState(false);
  const [cardvalue,setCardValue] = React.useState({});
  const appctx = React.useContext(AppContext);
  function handleDrawerOpen(){
    setDrawerOpen(!drawerOpen);
  }

  /* Get Card data from the backend */
  function onGetCardData(){
    getCardData(appctx.state.token,appctx.state.currUrl)
    .then((resp)=>{
      setCardValue(resp.result);
    })
    .catch((err)=>{
      if(err.response){
        console.log("RESP:",err.response);
        if(err.response.status === 401){
          appctx.action({type:"SIGNOUT"});
        }
      }
      else{
        console.log("ERROR :",err);
      }
    });
  }

  React.useEffect(function(){
    onGetCardData();    
  },[]);

  return(
    <React.Fragment>
    <Container maxWidth='lg'>
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={handleDrawerOpen}>
          <MenuIcon/>
        </IconButton>
        <Icon classes={{root: classes.iconRoot}}>
          <img
            src={JpnSvg}
            className={classes.imageIcon}
            alt=""
          />
        </Icon>
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
        onGetCard={onGetCardData}        
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
        <VoCard 
          data={cardvalue}
          title={appctx.state.cardTitle}
          onGetCard={onGetCardData}
        />
        </Grid>

      </Grid>
      <div className={classes.copyright}>
        <Copyright/>
      </div>
    </Container>
    </React.Fragment>
  );
};

