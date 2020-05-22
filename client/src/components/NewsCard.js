import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: 300,
    maxHeight: 500,
    marginBottom: 10,
    textAlign: "left"
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <div>
      {props.articles.map(results => (
        <Card className={classes.root}>
          <CardHeader
            title={<a href={results.link} target="_blank" rel="noreferrer noopener">{results.title}</a>}
            subheader={results.publishDate}
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
            <IconButton aria-label="share"><ShareIcon /></IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
