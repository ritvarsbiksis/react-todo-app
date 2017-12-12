import React, { Component } from 'react'
import { Checkbox, Divider } from 'material-ui'
import { ListItem, ListItemText } from 'material-ui/List'

class ItemToDo extends Component {
  render () {
    const { toDoInfo: { title, category }, ...props } = this.props

    return (
      <div {...props}>
        <ListItem>
          <Checkbox />
          <ListItemText primary={title} secondary={category} />
        </ListItem>
        <Divider />
      </div>
    )
  }
}

export default ItemToDo
