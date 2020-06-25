import React, { FC } from 'react'
import { ItemProps } from './types'
import { useStyle } from './styled'
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import { Deck } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'

export const Item: FC<ItemProps> = ({ showDetails, product: { name, description, type, userId, currency } }) => {
  const { item } = useStyle()
  return (
    <ListItem className={item}>
      <ListItemAvatar>
        <Avatar>
          <Deck />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={currency.currency} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
