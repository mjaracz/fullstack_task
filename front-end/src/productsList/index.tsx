import React from 'react'
import { useStyle } from './styled'
import { Item } from './item'
import { useProductsList } from './hooks/useProductsList'
import { Avatar, CircularProgress, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { Deck } from '@material-ui/icons'
import { Redirect } from 'react-router-dom'

export const ProductsList = () => {
  const { root } = useStyle()
  const { list, loading, error, jwtToken } = useProductsList()
  if (error === 'Unauthorized' || !jwtToken) {
    return <Redirect to="/unauthorized" />
  }
  return (
    <div className={root}>
      {loading ? (
        <CircularProgress size={114} color="primary" />
      ) : (
        <List dense={true}>
          {list.map((product, key) => (
            <Item key={key} showDetails={true} product={product} />
          ))}
        </List>
      )}
    </div>
  )
}
