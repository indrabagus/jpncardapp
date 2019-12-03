import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import JpnSvg from '../assets/japan.svg';

const useStyles = makeStyles((theme)=>({
  card : {
    maxWidth:'85vw',
    minWidth:'85vw',
    [theme.breakpoints.up('lg')]: {
      maxWidth:'50vw',
      minWidth:'50vw',
    },    
    borderRadius:10,
  },

  title: {
    fontSize:'1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize:'2rem',
    }    
  },

  vocabulary : {
    fontSize:'1.5rem',
    [theme.breakpoints.up('375')]: {
      fontSize:'2.5rem',
    },

    [theme.breakpoints.up('400')]: {
      fontSize:'2rem',
    },    

  },

  pos: {
    // fontSize:22,
    marginBottom:theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize:'1.5rem',
    }
  },

  imageIcon: {
    height: '100%'
  },

  iconRoot: {
    textAlign: 'center',
    marginRight:theme.spacing(1),
  },

}));

export function VoErrorCard(props){
  const classes = useStyles();
  return(
    <Card 
      style={{ backgroundColor: '#ECEFF1',height: '10vh' }} 
      className={classes.card}>
      <CardContent onClick={props.onGetCard}>
        <Typography style = {{color:'darkred'}} className={classes.pos}>
          {props.errormsg}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default function VoCard(props){
  const classes = useStyles();
  return(
    <div>
    <Card 
      style={{height:'40vh',backgroundColor: '#ECEFF1' }} 
      className={classes.card} >
      <CardContent 
        style={{height:'27vh'}}
        onClick={props.onGetCard}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Icon classes={{root: classes.iconRoot}}>
            <img
              src={JpnSvg}
              className={classes.imageIcon}
              alt=""
            />
          </Icon>
          {props.title}
        </Typography>
        {props.isBusy ? (
          <CircularProgress style={{margin:20}}/>
        ) : (
          <React.Fragment>
        <Typography className={classes.vocabulary} >
          { props.data.kanji ? props.data.kanji:props.data.kana}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* If it's not kanji write unicode 'space' (\u00a0) instead */}
          { props.data.kanji ? '[ '+props.data.kana+' ]':"\u00a0"} 
        </Typography>
        <Typography variant="body2" component="p">
          "{props.data.english}"
            {/* TODO: Example Given 
            <br />
          <br />
          e.g: {'"図書館で勉強するができます。"'} */}
        </Typography>

          </React.Fragment>
        ) 
        }
      </CardContent>
      <CardActions style={{paddingBottom:'1px'}}>
        <Button 
          size="medium"
          onClick={props.onGetCard}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}