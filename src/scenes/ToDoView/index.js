import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'

import styles from './styles'
import PageTitle from '../../components/PageTtitle'

class ToDoView extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.contentWrapper}>
        <PageTitle title={'ToDoView'} />
      </div>
    )
  }
}

ToDoView.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ToDoView)
