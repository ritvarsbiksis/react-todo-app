import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import _ from 'lodash'

class AuthorizedComponent extends Component {
  render () {
    const { component: Component, user, ...rest } = this.props

    return (
      <Route {...rest} render={(props) => (!_.isEmpty(user) ? <Component {...props} /> : null)} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user
  }
}

export default connect(mapStateToProps)(AuthorizedComponent)
