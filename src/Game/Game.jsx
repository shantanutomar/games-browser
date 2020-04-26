import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: '20px',
    margin: '10px',
    backgroundColor: "#BDBDBD",
    textAlign: "left"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: "center"
  },
  cardRoot: { 
      padding: 0,
      '&:last-child': {
        padding: 0
      }
  }
});

const Game = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardRoot}>
        <Typography className={classes.title} variant="h6" color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography color="textSecondary">
          Platform - {props.platform}
        </Typography>
        <Typography color="textSecondary">
          Score - {props.score}
        </Typography>
        <Typography color="textSecondary">
          Genre - {props.genre}
        </Typography>
        <Typography color="textSecondary">
          Editors Choice - {props.editors_choice === 'Y' ? 'Yes' : 'No'}
        </Typography>
        <Typography color="textSecondary">
          Release year - {props.release_year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Game;
