import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'

import './style.scss'
import styles from './styles'
import Header from '../Header'
import Login from '../../scenes/Login'
import ToDoList from '../../scenes/ToDoList'
import AuthorizedRoute from '../AuthorizedRoute'

class App extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className={classes.container}>
              <AuthorizedRoute user path={'/'} exact component={ToDoList} />
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
