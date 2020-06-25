import { makeStyles } from '@material-ui/styles'

export const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  rememberPassLink: {
    display: 'block',
    height: '2em',
    textDecoration: 'none',
    fontSize: 12,
    color: '#011652',
    marginTop: 15,
    transition: '0.4s',
    '&:hover ': {
      color: '#b000ff',
    },
  },
})
