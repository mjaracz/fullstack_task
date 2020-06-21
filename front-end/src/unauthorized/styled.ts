import {makeStyles} from '@material-ui/styles';

export const useStyle = makeStyles({
  unauthorized: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  unauthorizedText: {
    fontSize: 23,
    color: '#fff',
    '& > a': {
      textDecoration: 'none',
      color: '#bc36ff',
    }
  }
})