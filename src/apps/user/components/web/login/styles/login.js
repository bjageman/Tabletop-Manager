import { createStyleSheet } from 'material-ui/styles';


const styleSheet = createStyleSheet('Login', (theme) => ({
  root: {
    color: 'inherit',
    textDecoration: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  primary: {
    paddingLeft: 40,
    margingRight: 20,
    color: "blue",
  },
  container: {
    marginLeft: "5%",
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
      marginRight: 10
  }
}));

export default styleSheet
