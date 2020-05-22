import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [sign, setSign] = React.useState('');

  const handleChange = (event) => {
    setSign(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="simple-select-label">Choose Your Sign</InputLabel>
      <Select
        labelId="simple-select-label"
        id="simple-select"
        value={sign}
        onChange={handleChange}
      >
        <MenuItem value={"aries"}>Aries</MenuItem>
        <MenuItem value={"taurus"}>Taurus</MenuItem>
        <MenuItem value={"gemini"}>Gemini</MenuItem>
        <MenuItem value={"cancer"}>Cancer</MenuItem>
        <MenuItem value={"leo"}>Leo</MenuItem>
        <MenuItem value={"virgo"}>Virgo</MenuItem>
        <MenuItem value={"libra"}>Libra</MenuItem>
        <MenuItem value={"scorpio"}>Scorpio</MenuItem>
        <MenuItem value={"sagittarius"}>Sagittarius</MenuItem>
        <MenuItem value={"capricorn"}>Capricorn</MenuItem>
        <MenuItem value={"aquarius"}>Aquarius</MenuItem>
        <MenuItem value={"pisces"}>Pisces</MenuItem>
      </Select>
    </FormControl>
  );
}