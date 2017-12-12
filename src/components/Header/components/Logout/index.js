import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'material-ui'

import { setUser } from '../../../../actions'

class Logout extends Component {
  render () {
    const { setUser } = this.props

    return (
      <Button color={'contrast'} onClick={() => setUser(null)}>
        Logout
      </Button>
    )
  }
}

export default connect(null, { setUser })(Logout)
