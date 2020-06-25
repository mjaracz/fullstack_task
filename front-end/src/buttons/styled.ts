import { makeStyles } from '@material-ui/styles'

export const useStyle = makeStyles({
  buttonForm: {
    marginTop: 30,
    '&:hover ': {
      transition: '.7s',
      color: '#ffffff',
      backgroundColor: '#2962ff',
    },
  },
  buttonHome: {
    margin: 22,
    '&:hover': {
      transition: '.7s',
      backgroundColor: '#2962ff',
      color: '#ffffff',
    },
  },
})
