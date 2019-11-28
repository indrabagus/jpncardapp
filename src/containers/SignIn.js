import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Copyright from '../components/Copyright';
import AppContext from '../services/jcardContext';
import {getToken} from '../services/jcardApi';
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(){
  const classes = useStyles();
  const appctx = React.useContext(AppContext);
  const [sVal,setState] = React.useState({
    username:'guest',
    password:'kumamoto',
    isSubmitting:false,
    isRemember:true,
    errmsg:null    
  });
  // State for opening dialog
  const [open, setOpen] = React.useState(false);

  // State for login as guest or not
  const [asGuest,setAsGuest] = React.useState(true);

  function handleChange(event){
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const id = event.target.id;
    setState({
      ...sVal,
      [id]:value,
    });
  }

  function OnSignIn(props){
    props.preventDefault();
    getToken(sVal.username,sVal.password)
    .then((result) => {
      appctx.action({
        type:"SIGNIN",
          payload:{
          isLocal:sVal.isRemember,
          token:result.token
        }
      });
    })
    .catch(err=>{
      console.log("ERROR=>",err);
      setState( prevState=>{
        return{
          ...prevState,
          errmsg: err.message||err.statusText
      }});
      setOpen(true);
    });


  }
  const handleClose = () => {
    setOpen(false);
  };  

  const FormLogin = (
    <form action="/" method="GET" onSubmit={OnSignIn} className={classes.form} noValidate>
      <TextField
        disabled={asGuest}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Username"
        autoComplete="username"
        autoFocus
        value={sVal.username}
        id="username"
        onChange={handleChange}
      />
      <TextField
        disabled={asGuest}
        variant="outlined"
        margin="normal"
        id="password"
        type="password"
        label="Password"
        autoComplete="current-password"
        required
        fullWidth
        onChange={handleChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            disabled={asGuest}
            type="checkbox" 
            checked = {sVal.isRemember}
            id="isRemember" 
            color="primary" 
            onChange={handleChange} 
          />
          
        }
        label="Remember me"
      />

      <FormControlLabel
        control={
          <Checkbox
            type="checkbox" 
            checked = {asGuest}
            id="isRemember" 
            color="primary" 
            onChange={ ()=>(setAsGuest(!asGuest)) } 
          />
        }
        label="Login as guest"
      />


      <Button
        className={classes.submit}
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Sign In
      </Button>
    </form>
    
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        { FormLogin }
      <Grid container>
        <Grid item>
          <Link href="mailto:indra.bagus@gmail.com" variant="body2">
            {"Contact: indra.bagus@gmail.com"}
          </Link>
        </Grid>
      </Grid>
        
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Error Notification !"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Error Message: {sVal.errmsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
}
