import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: 300,
    maxHeight: 500,
    marginBottom: 10,
    textAlign: "left"
  },
//     expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest
//     })
//   },
//   expandOpen: { transform: 'rotate(180deg)' }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);
  
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

  return (
    <div>
      {props.articles.map(results => (
        <Card className={classes.root}>
          <CardHeader
//             action={
//               <IconButton
//                 className={clsx(classes.expand, {
//                   [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </IconButton>
//             }
            title={<a href={results.link} target="_blank" rel="noreferrer noopener">{results.title}</a>}
            subheader={results.publishDate}
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
            <IconButton aria-label="share"><ShareIcon /></IconButton>
          </CardActions>
           {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
             <CardContent>
               <Typography paragraph>Description:</Typography>
               <Typography paragraph>{results.description}</Typography>
             </CardContent>
           </Collapse> */}
        </Card>
      ))}
    </div>
  );
}
