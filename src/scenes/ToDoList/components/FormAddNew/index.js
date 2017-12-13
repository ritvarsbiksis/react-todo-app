import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { Button } from 'material-ui'
import Radio, { RadioGroup } from 'material-ui/Radio'
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form'
import { reduxForm, formValueSelector } from 'redux-form'
import _ from 'lodash'

import styles from './styles'
import validate from './utils/validateForm'
import ReduxField from '../../../../components/ReduxField'
import { todoCreate } from '../../actions'

const form = 'formFormAddNew'

class FormAddNew extends Component {
  constructor (props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  render () {
    const {
      classes,
      formValues: { category },
      change,
      handleSubmit,
      onClickCancelBtn,
      categoriesData
    } = this.props

    return (
      <form noValidate autoComplete={'off'} onSubmit={handleSubmit(this.onFormSubmit)}>
        <ReduxField
          name={'title'}
          label={'Title'}
          className={classes.textField}
          margin={'normal'}
          placeholder={'ToDo title'}
        />
        <ReduxField
          className={classes.textField}
          margin={'normal'}
          label={'Content'}
          placeholder={'Write some lines\n...on ToDo'}
          name={'content'}
          multiline
          rows={2}
          rowsMax={20}
        />
        <FormControl className={classes.root} component={'fieldset'}>
          <FormLabel className={classes.formLabel} component={'legend'}>
            Category
          </FormLabel>
          <RadioGroup
            aria-label={'category'}
            name={'category'}
            className={classes.group}
            value={category}
            onChange={(e, value) => change('category', value)}>
            {_.map(categoriesData, ({ label, value }) => (
              <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
            ))}
          </RadioGroup>
        </FormControl>
        <div className={classes.btnContainer}>
          <Button
            type={'submit'}
            color={'accent'}
            raised
            className={classes.button}
            onClick={handleSubmit(this.onFormSubmit)}>
            Submit
          </Button>
          <Button className={classes.button} raised onClick={onClickCancelBtn}>
            Cancel
          </Button>
        </div>
      </form>
    )
  }

  onFormSubmit (event) {
    const { formValues, todoCreate, user: { id }, reset } = this.props

    todoCreate({ ...formValues, userId: id })
    reset()
  }
}

FormAddNew.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user,
    categoriesData: state.todos.categoriesData,
    formValues: formValueSelector(form)(state, 'title', 'content', 'category'),
    initialValues: {
      category: 'normal',
      content: ''
    }
  }
}

export default connect(mapStateToProps, { todoCreate })(
  reduxForm({ form, validate })(withStyles(styles)(FormAddNew))
)
