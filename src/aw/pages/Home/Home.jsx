import { Container } from '@material-ui/core';
import Dashboard from 'aw/components/Dashboard';
import HomeDayRecords from 'aw/components/HomeDayRecords';
import HomeFloatActionButton from './HomeFloatActionButton';

function Home() {
  return (
    <>
      <Container>
        <Dashboard />
        <HomeDayRecords />
      </Container>
      <HomeFloatActionButton />
    </>
  );
}

Home.propTypes = {};

export default Home;
