import { makeStyles } from '@material-ui/styles'

export const useStyle = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '100vh',
    width: '100vw',
    overflowY: 'auto',
  },
  item: {
    backgroundColor: '#f6f6f6',
    margin: 20,
    borderRadius: 15,
  },
  itemText: {
    fontSize: 18,
  },
})
