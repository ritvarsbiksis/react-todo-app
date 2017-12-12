import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { Button } from 'material-ui'
import _ from 'lodash'
import { Redirect, Switch } from 'react-router-dom'
import { reduxForm, formValueSelector } from 'redux-form'

import styles from './styles'
import validate from './utils/validateForm'
import { setUser } from '../../actions'
import PageTitle from '../../components/PageTtitle'
import ReduxField from '../../components/ReduxField'

const form = 'formLogin'

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
    const { classes, user, handleSubmit } = this.props
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
        <form noValidate autoComplete={'off'} onSubmit={handleSubmit(this.onFormSubmit)}>
          <ReduxField
            name={'username'}
            label={'Username'}
            className={classes.textField}
            margin={'normal'}
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <ReduxField
            name={'password'}
            label={'Password'}
            className={classes.textField}
            type={'password'}
            margin={'normal'}
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Button
            type={'submit'}
            raised
            className={classes.button}
            onClick={handleSubmit(this.onFormSubmit)}>
            Login
          </Button>
        </form>
      </div>
    )
  }

  onFormSubmit (event) {
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
    user: state.common.user,
    formValues: formValueSelector(form)(state, 'username', 'password')
  }
}

export default connect(mapStateToProps, { setUser })(
  reduxForm({ form, validate })(withStyles(styles)(Login))
)
