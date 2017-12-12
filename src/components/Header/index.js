import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Typography, Button } from 'material-ui'

import styles from './styles'

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
            {this.renderButtons()}
          </Toolbar>
        </AppBar>
      </div>
    )
  }

  renderButtons () {
    const { classes } = this.props

    return (
      <div>
        <Link to={'/login'}>
          <Button className={classes.button} color={'contrast'}>
            Login
          </Button>
        </Link>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
