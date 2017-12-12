import _ from 'lodash'

export default (values, ownProps) => {
  const errors = {}

  if (_.isEmpty(values.username)) errors.username = 'Required'
  else if (values.username.length < 4) {
    errors.username = 'Must be 4 characters or more'
  }
  if (_.isEmpty(values.password)) errors.password = 'Required'
  else if (values.password.length < 4) {
    errors.password = 'Must be 4 characters or more'
  }
  return errors
}
