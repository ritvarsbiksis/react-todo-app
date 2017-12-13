import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import _ from 'lodash'

class AuthorizedRoute extends Component {
  render () {
    const { component: Component, user, ...rest } = this.props

    return (
      <Route
        {...rest}
        render={(props) =>
          !_.isEmpty(user) ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user
  }
}

export default connect(mapStateToProps)(AuthorizedRoute)
