import { makeStyles } from '@material-ui/styles'

export const useStyle = makeStyles({
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 550,
  },
  homeText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
  },
  homeTitle: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 400,
  },
  textDistinction: {
    color: '#bc36ff',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
