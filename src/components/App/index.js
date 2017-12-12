import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'

import './style.scss'
import styles from './styles'
import Header from '../Header'

const Login = () => <div>Login</div>
const ToDos = () => <div>ToDos</div>

class App extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className={classes.container}>
              <Route path={'/'} exact component={ToDos} />
              <Route path={'/login'} component={Login} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
