import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  card : {
    maxWidth:290,
    minWidth:290,
    [theme.breakpoints.up('375')]: {
      maxWidth:340,
      minWidth:340,
    },

    [theme.breakpoints.up('400')]: {
      maxWidth:380,
      minWidth:380,
    },    
    
    [theme.breakpoints.up('md')]: {
      maxWidth:1024,
      minWidth:800,
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
    [theme.breakpoints.up('md')]: {
      fontSize:'4rem',
    }
  },

  pos: {
    // fontSize:22,
    marginBottom:theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize:'1.5rem',
    }
  },
}));

export default function VoCard(props){
  const classes = useStyles();
  return(
    <Card className={classes.card} >
      <CardContent onClick={props.onGetCard}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography className={classes.vocabulary} >
          { props.data.kanji ? props.data.kanji:props.data.kana}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* If it's not kanji write unicode 'space' (\u00a0) instead */}
          { props.data.kanji ? '[ '+props.data.kana+' ]':"\u00a0"} 
        </Typography>
        <Typography variant="body2" component="p">
          "{props.data.english}"
          {/* <br />
          <br />
          e.g: {'"図書館で勉強するができます。"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="medium"
          onClick={props.onGetCard}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}