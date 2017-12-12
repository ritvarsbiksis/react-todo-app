import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { Button } from 'material-ui'
import Radio, { RadioGroup } from 'material-ui/Radio'
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form'
import { Link } from 'react-router-dom'
import { reduxForm, formValueSelector } from 'redux-form'

import styles from './styles'
import validate from './utils/validateForm'
import ReduxField from '../../../../components/ReduxField'

const form = 'formFormAddNew'

class FormAddNew extends Component {
  constructor (props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  render () {
    const { classes, formValues: { category }, change, handleSubmit } = this.props

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
            <FormControlLabel value={'normal'} control={<Radio />} label={'Normal'} />
            <FormControlLabel value={'urgent'} control={<Radio />} label={'Urgent'} />
            <FormControlLabel value={'important'} control={<Radio />} label={'Important'} />
            <FormControlLabel value={'optional'} control={<Radio />} label={'Optional'} />
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
          <Link to={'/'} className={classes.button}>
            <Button raised>Cancel</Button>
          </Link>
        </div>
      </form>
    )
  }

  onFormSubmit (event) {
    const { formValues } = this.props

    console.log('formValues :: ', formValues)
  }
}

FormAddNew.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    formValues: formValueSelector(form)(state, 'title', 'content', 'category'),
    initialValues: {
      category: 'urgent',
      content: ''
    }
  }
}

export default connect(mapStateToProps)(
  reduxForm({ form, validate })(withStyles(styles)(FormAddNew))
)
