import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
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
  }
}));

export default function NewsCard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      {props.articles.map(results => (
        <Card className={classes.root} key={results.link}>
          <CardHeader
            title={<a href={results.link} target="_blank" rel="noreferrer noopener">{results.title}</a>}
            subheader={results.publishDate}
          />
          <CardActions disableSpacing>
            <IconButton
              aria-label="share"
              onClick={(e) => {
                setAnchorEl(e.currentTarget)
                navigator.clipboard.writeText(results.link)
              }}
            ><ShareIcon /></IconButton>
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
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
