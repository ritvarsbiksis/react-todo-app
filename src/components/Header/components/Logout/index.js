import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'material-ui'

import { setUser } from '../../../../actions'
import { todoClearList } from '../../../../scenes/ToDoList/actions'

class Logout extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      <Button color={'contrast'} onClick={this.handleClick}>
        Logout
      </Button>
    )
  }

  handleClick () {
    const { todoClearList, setUser } = this.props

    setUser(null)
    todoClearList()
  }
}

export default connect(null, { setUser, todoClearList })(Logout)
