import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Route, HashRouter } from 'react-router-dom'

import styles from './styles'
import ListToDo from './components/ListToDo'
import ToDoView from '../ToDoView'

class ToDoList extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.contentWrapper}>
        <HashRouter hashType={'noslash'}>
          <div>
            <Route path={'/'} exact component={ListToDo} />
            <Route path={'/todo/:todoID'} exact component={ToDoView} />
          </div>
        </HashRouter>
      </div>
    )
  }
}

ToDoList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ToDoList)
