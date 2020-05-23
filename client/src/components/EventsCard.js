import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: 300,
    maxHeight: 500,
    marginBottom: 10,
    textAlign: "left"
  },
  typography: {
    padding: theme.spacing(2),
    color: 'white',
    background: 'linear-gradient(to right, #4A00E0, #8E2DE2)'
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

export default function EventsCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
              aria-label="share"
              onClick={(e) => {
                setAnchorEl(e.currentTarget)
                navigator.clipboard.writeText(results.link)
              }}
            ><ShareIcon /></IconButton>
          </CardActions>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            elevation={3}
          >
            <Typography className={classes.typography}>Link copied to clipboard!</Typography>
          </Popover>
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