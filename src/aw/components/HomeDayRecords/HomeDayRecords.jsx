import { Grid } from '@material-ui/core';
import React from 'react';
import HomeDayRecord from './HomeDayRecord';

// TODO: lazy load
function HomeDayRecords() {
  return (
    <Grid container>
      <HomeDayRecord />
      <HomeDayRecord />
      <HomeDayRecord />
    </Grid>
  );
}

HomeDayRecords.propTypes = {};

export default HomeDayRecords;
