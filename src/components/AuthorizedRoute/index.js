import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

class AuthorizedRoute extends Component {
  render () {
    const { component: Component, user, ...cust } = this.props

    return (
      <Route
        {...cust}
        render={(props) => (user ? <Component {...props} /> : <Redirect to={'/login'} />)}
      />
    )
  }
}

export default AuthorizedRoute
