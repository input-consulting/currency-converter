import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5D7CA6',
    },
    secondary: {
      main: '#023059',
    },
    highlight: {
      main: '#F2CAA7',
    },
    background: {
      paper: '#424242',
      default: '#73A2BF',
    },
  },
  typography: {
    fontFamily: [
      '"Neue Haas Grotesk"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
