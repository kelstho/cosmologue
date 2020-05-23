import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 70,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);


const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo2: {
    backgroundColor: '#2e1534',
    opacity: '90%',
    borderRadius: '0.5em'
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange} aria-label="favorited items tabs" centered>
          <StyledTab label="News Articles" {...a11yProps(0)} />
          <StyledTab label="Astronomical Events" {...a11yProps(1)} />
        </StyledTabs>
        <TabPanel value={value} index={0}>
          <ul className="collection">
            {/* <FavoriteList favorites={this.state.favorites} /> */}
            <li className="collection-item">
              <a href="#">Lunary Event</a>
            </li>
            <li className="collection-item">
              <a href="#">Solar Event</a>
            </li>
            <li className="collection-item">
              <a href="#">Celestial Event</a>
            </li>
            <li className="collection-item">
              <a href="#">Party Event</a>
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ul className="collection">
            <li className="collection-item">
              <a href="#">Lunary Event</a>
            </li>
            <li className="collection-item">
              <a href="#">Solar Event</a>
            </li>
            <li className="collection-item">
              <a href="#">Celestial Event</a>
            </li>
            <li className="collection-item">
              <a href="#">Party Event</a>
            </li>
          </ul>
        </TabPanel>
      </div>
    </div>

  );
}
