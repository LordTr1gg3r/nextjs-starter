import { createTheme, responsiveFontSizes  } from '@mui/material/styles';
import Colors from './colors'
 

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Colors.primary.main,
    },
    secondary: {
      main: Colors.secondary.main,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;