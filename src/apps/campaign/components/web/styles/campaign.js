import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('SimpleMediaCard', {
  container: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  card: {
    marginTop: "1%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "1%"
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
      width:"100%",
      maxHeight: 300,
  }
});

export default styleSheet
