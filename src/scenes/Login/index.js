import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { Button } from 'material-ui'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
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
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  render () {
    const { classes, user, handleSubmit } = this.props

    if (!_.isEmpty(user)) {
      return <Redirect from={'/login'} to={'/'} />
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
          />
          <ReduxField
            name={'password'}
            label={'Password'}
            className={classes.textField}
            type={'password'}
            margin={'normal'}
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
    const { setUser, formValues: { username, password } } = this.props

    setUser({ username, password })
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user,
    formValues: formValueSelector(form)(state, 'username', 'password'),
    initialValues: {
      username: 'testss',
      password: 'testdssdf'
    }
  }
}

export default connect(mapStateToProps, { setUser })(
  reduxForm({ form, validate })(withStyles(styles)(Login))
)
