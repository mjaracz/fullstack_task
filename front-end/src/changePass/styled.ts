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
  text: {
    color: '#050f4a',
    width: 200,
    letterSpacing: 1,
  },
  textDistinction: {
    color: '#bc36ff',
  },
})
