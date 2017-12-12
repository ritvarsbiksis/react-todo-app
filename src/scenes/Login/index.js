import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { TextField, Button } from 'material-ui'

import styles from './styles'
import { setUser } from '../../actions'
import PageTitle from '../../components/PageTtitle'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentDidMount () {
    this.props.setUser({ username: 'admin', pass: 'passs888' })
  }

  render () {
    const { classes } = this.props
    const { email, password } = this.state

    return (
      <div>
        <PageTitle title={'Login'} />
        <form noValidate autoComplete={'off'}>
          <TextField
            id={'email'}
            label={'Email'}
            className={classes.textField}
            margin={'normal'}
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
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
    const { user } = this.props

    console.log('Form submited')
    console.log('User data from redux store : ', user)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { setUser })(withStyles(styles)(Login))
