import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  card : {
    maxWidth:400,
    minWidth:290,
    [theme.breakpoints.up('sm')]: {
      maxWidth:600,      
      minWidth:400,
    },
    
    [theme.breakpoints.up('md')]: {
      maxWidth:1024,      
      minWidth:800,
    },

    borderRadius:10,
  },
  title: {
    fontSize:'1rem',
    [theme.breakpoints.up('md')]: {
      fontSize:'2rem',
    }    
  },

  vocabulary : {
    fontSize:'1rem',
    [theme.breakpoints.up('md')]: {
      fontSize:'4rem',
    }
  },

  pos: {
    // fontSize:22,
    marginBottom:theme.spacing(2),
  },
}));

export default function VoCard(props){
  const classes = useStyles();
  return(
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Vocabulary Card
        </Typography>
        <Typography className={classes.vocabulary} >
          { props.data.kanji ? props.data.kanji:props.data.kana}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          { props.data.kanji ? '[ '+props.data.kana+' ]':''} 
        </Typography>
        <Typography variant="body2" component="p">
          English: '{props.data.english}''
          <br />
          <br />
          e.g: {'"図書館で勉強するができます。"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small"
          onClick={props.onGetCard}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}