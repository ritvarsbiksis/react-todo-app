import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Checkbox, Divider } from 'material-ui'
import { ListItem, ListItemText } from 'material-ui/List'
import { todosUpdate } from '../../actions'

class ItemToDo extends Component {
  state = {
    isDone: false
  }

  componentDidMount () {
    const { toDoInfo: { done } } = this.props

    if (done) this.setState({ isDone: true })
  }

  render () {
    const { toDoInfo: { title, category, id }, todosUpdate, user, ...props } = this.props
    const { isDone } = this.state

    return (
      <div {...props}>
        <ListItem>
          <Checkbox
            checked={isDone}
            onChange={() => {
              todosUpdate({ userId: user.id, id, data: { done: !isDone } })
              this.setState({ isDone: !isDone })
            }}
          />
          <ListItemText primary={title} secondary={category} />
        </ListItem>
        <Divider />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user
  }
}

export default connect(mapStateToProps, { todosUpdate })(ItemToDo)
