import {makeStyles} from "@material-ui/styles";

export const useStyle = makeStyles({
  rememberPass: {
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 15
  },
  rememberText: {
    color: '#3f51b5'
  },
  rememberButton: {
    marginTop: 30,
    '&:hover': {
      transition: '.7s',
      backgroundColor: '#2962ff',
      color: '#ffffff'
    }
  }
})