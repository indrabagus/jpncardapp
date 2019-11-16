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
import Copyright from '../components/Copyright';
import AuthContext from '../services/jcardContext';

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
  const authctx = React.useContext(AuthContext);
  const [sVal,setState] = React.useState({
    username:'',
    password:'',
    isSubmitting:false,
    isRemember:true,
    errmsg:null    
  });

  function handleChange(event){
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const id = event.target.id;
    setState({
      ...sVal,
      [id]:value,
    });
  }

  function OnSignIn(props){
    authctx.action({
      type:"LOGIN",
        payload:{
        isLocal:sVal.isRemember,
        token:null
      }
    });
  }

  const FormLogin = (
    <form className={classes.form} noValidate>
      <TextField
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
        variant="outlined"
        margin="normal"
        id="password"
        label="Password"
        autoComplete="current-password"
        required
        fullWidth
        onChange={handleChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            type="checkbox" 
            checked = {sVal.isRemember}
            id="isRemember" 
            color="primary" 
            onChange={handleChange} 
          />
        }
        label="Remember me"
      />
      <Button
        className={classes.submit}
        type="button"
        variant="contained"
        color="primary"
        fullWidth
        onClick={OnSignIn}
      >
        SignIn
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
          <Link href="#" variant="body2">
            {"Contact Email: indra.bagus@gmail.com"}
          </Link>
        </Grid>
      </Grid>
        
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
