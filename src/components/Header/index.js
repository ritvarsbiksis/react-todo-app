import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Typography } from 'material-ui'

import styles from './styles'
import AuthorizedComponent from '../AuthorizedComponent/index'
import Logout from './components/Logout'

class Header extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AppBar position={'static'}>
          <Toolbar>
            <Typography
              type={'title'}
              color={'inherit'}
              className={`${classes.flex} ${classes.title}`}>
              React ToDo App
            </Typography>
            <AuthorizedComponent path={'/'} component={Logout} />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
