import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NativeSelect, FormControl } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { fetchAsyncGetCountry } from '../covidSlice';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCountry:React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const Countries = [
    'japan',
    'china',
    'us',
    'france',
    'italy',
    'spain',
    'united kingdom',
    'germany',
    'russia',
    'brazil',
    'taiwan',
    'thailand',
    'new zealand',
    'sweaden',
    'india',
  ];

  return(
  <FormControl className={classes.formControl}>
    <NativeSelect
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        dispatch(fetchAsyncGetCountry(e.target.value))
      }
    >

    <option value=''>Wordwide</option>
    {Countries.map((country, i) => (
      <option key={i} value={country}>
        {country}
      </option>
    ))}
    </NativeSelect>
  </FormControl>
  );
}

export default SwitchCountry
