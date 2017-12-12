import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { TextField, Button } from 'material-ui'
import _ from 'lodash'
import { Redirect, Switch } from 'react-router-dom'

import styles from './styles'
import { setUser } from '../../actions'
import PageTitle from '../../components/PageTtitle'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  render () {
    const { classes, user } = this.props
    const { username, password } = this.state

    if (!_.isEmpty(user)) {
      return (
        <Switch>
          <Redirect from={'/login'} to={'/'} />
        </Switch>
      )
    }

    return (
      <div>
        <PageTitle title={'Login'} />
        <form noValidate autoComplete={'off'}>
          <TextField
            id={'username'}
            label={'Username'}
            className={classes.textField}
            margin={'normal'}
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <TextField
            id={'password'}
            label={'Password'}
            className={classes.textField}
            type={'password'}
            margin={'normal'}
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Button type={'submit'} raised className={classes.button} onClick={this.onFormSubmit}>
            Login
          </Button>
        </form>
      </div>
    )
  }

  onFormSubmit (event) {
    event.preventDefault()
    const { setUser } = this.props
    const { username, password } = this.state

    setUser({ username, password })
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user
  }
}

export default connect(mapStateToProps, { setUser })(withStyles(styles)(Login))
