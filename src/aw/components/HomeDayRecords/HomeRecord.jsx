import { Grid } from '@material-ui/core';
import React from 'react';

function HomeRecord() {
  return (
    <Grid container>
      <Grid>Food</Grid>
      <Grid>早餐</Grid>
      <Grid>$50</Grid>
    </Grid>
  );
}

HomeRecord.propTypes = {};

export default HomeRecord;
