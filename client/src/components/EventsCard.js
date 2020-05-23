import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: 300,
    maxHeight: 500,
    marginBottom: 10,
    textAlign: "left"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: { transform: 'rotate(180deg)' }
}));

export default function RecipeReviewCard(props) {

  // state = {
  //   list: [],
  //   favorites: []
  // };

  // addFavorite = favorite => {
  //   const {favorites} = this.state
  //   if (!favorites.some(alreadyFavorite => alreadyFavorite.id == favorite.id)) {
  //     this.setState({
  //       favorites: [...this.state.favorites, favorite]
  //     });
  //   }
  // }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const share = (link) => {
    console.log(`${link} copied to clipboard`)
  }

 const  addFavorite = (favorite) => {
    // const { favorites } = this.state
    console.log(`the ${favorite} button was clicked`)

    // if (!favorites.some(alreadyFavorite => alreadyFavorite.id == favorite.id)) {
    //   this.setState({
    //     favorites: [...this.state.favorites, favorite]
    //   })
    // }
  }

  // const favorite = (event) => {
  //   this.props.addFavorite(event)
  // }

  return (
    <div>
      {props.calEvents.map(results => (
        <Card className={classes.root} key={results.link}>
          <CardHeader
            action={
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            }
            title={<a href={results.link} target="_blank" rel="noreferrer noopener">{results.title}</a>}
            subheader={`Date: ${results.month}/${results.day}/${results.year}`}
          />
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={(e) => {
                e.preventDefault()
                addFavorite('favorites')
              }}
            ><FavoriteIcon /></IconButton>
            <IconButton
              aria-label="share"
              onClick={(e) => {
                share('event link')
              }}
            ><ShareIcon /></IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description:</Typography>
              <Typography paragraph>{results.summary}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}
