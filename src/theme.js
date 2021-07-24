import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    // #f8f9fa
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
    },
    // #0b7bf1
    secondary: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
    },
  },
});

export default theme;
