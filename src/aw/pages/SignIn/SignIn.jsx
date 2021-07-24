import { Button, Container, Stack } from '@material-ui/core';
import React from 'react';

function SignIn() {
  return (
    <Container>
      <Stack spacing={2} justifyContent="center" sx={{ height: '100vh' }}>
        <Button variant="outlined">Sign In with Phone Number</Button>
        <Button variant="outlined">Sign In with Google</Button>
      </Stack>
    </Container>
  );
}

SignIn.propTypes = {};

export default SignIn;
