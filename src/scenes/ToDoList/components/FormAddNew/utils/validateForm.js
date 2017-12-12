import _ from 'lodash'

export default (values, ownProps) => {
  const errors = {}

  if (_.isEmpty(values.title)) errors.title = 'Required'
  else if (values.title.length < 3) {
    errors.title = 'Must be 3 characters or more'
  }

  return errors
}
