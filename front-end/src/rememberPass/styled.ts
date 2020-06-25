import { makeStyles } from '@material-ui/styles'

export const useStyle = makeStyles({
  root: {
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  rootRememberInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
  },
  rememberText: {
    color: '#050f4a',
    width: 200,
    letterSpacing: 1,
  },
  rememberInfoText: {
    color: '#fff',
    width: 380,
    letterSpacing: 1,
    fontSize: 23,
  },
  textDistinction: {
    color: '#bc36ff',
  },
})
