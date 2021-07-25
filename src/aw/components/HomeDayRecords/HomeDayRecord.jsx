import { Grid } from '@material-ui/core';
import HomeRecord from './HomeRecord';

function HomeDayRecord() {
  return (
    <Grid container>
      <Grid item xs={12}>
        2021/7/23
      </Grid>
      <HomeRecord />
      <HomeRecord />
    </Grid>
  );
}

HomeDayRecord.propTypes = {};

export default HomeDayRecord;
