import { Button, Container, Stack } from '@material-ui/core';
import Dashboard from 'aw/components/Dashboard';
import HomeDayRecords from 'aw/components/HomeDayRecords';
import React from 'react';

function Home() {
  return (
    <Container>
      <Dashboard />
      <HomeDayRecords />
      <Stack direction="row" justifyContent="space-between">
        <Button variant="outlined">Detail</Button>
        <Button variant="outlined">New</Button>
        <Button variant="outlined">Settings</Button>
      </Stack>
    </Container>
  );
}

Home.propTypes = {};

export default Home;
