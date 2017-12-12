import React, { Component } from 'react'
import { Field } from 'redux-form'
import { TextField } from 'material-ui'
import _ from 'lodash'

class ReduxField extends Component {
  render () {
    const { onKeyDown, ...props } = this.props

    return (
      <Field
        onKeyDown={(event) => {
          event.stopPropagation()
          if (onKeyDown !== undefined) onKeyDown(event)
        }}
        component={this.renderTextField}
        {...props}
      />
    )
  }

  renderTextField ({ input, meta: { touched, error }, ...custom }) {
    const showError = () => touched && !_.isEmpty(error)

    return <TextField error={showError()} helperText={touched && error} {...input} {...custom} />
  }
}

export default ReduxField
