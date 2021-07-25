import { Box, Fab, Stack } from '@material-ui/core';
import { AccountBalanceWallet, Add, Settings } from '@material-ui/icons';

function HomeFloatActionButton() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        width: '100%',
        position: 'fixed' /* Fixed/sticky position */,
        padding: '1rem',
        bottom: '0px' /* Place the button at the bottom of the page */,
        zIndex: '99' /* Make sure it does not overlap */,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Fab size="small" color="default" aria-label="detail">
          <AccountBalanceWallet />
        </Fab>
        <Fab
          variant="extended"
          size="medium"
          color="default"
          aria-label="new record"
        >
          <Add />
          New Record
        </Fab>
        <Fab size="small" color="default" aria-label="settings">
          <Settings />
        </Fab>
      </Stack>
    </Box>
  );
}

HomeFloatActionButton.propTypes = {};

export default HomeFloatActionButton;
