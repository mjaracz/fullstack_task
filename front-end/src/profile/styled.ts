import {makeStyles} from '@material-ui/styles';

export const useStyle = makeStyles({
  profile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileBackButton: {
    margin: 20
  },
  profileText: {
    padding: 23,
    fontSize: 23,
    color: '#fff'
  }
});