import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Button, TextField } from 'material-ui'
import Radio, { RadioGroup } from 'material-ui/Radio'
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form'

import styles from './styles'

class FormAddNew extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      category: 'normal'
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  render () {
    const { classes } = this.props
    const { title, content, category } = this.state

    return (
      <form noValidate autoComplete={'off'}>
        <TextField
          className={classes.textField}
          margin={'normal'}
          label={'Title'}
          placeholder={'ToDo title'}
          id={'title'}
          value={title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <TextField
          className={classes.textField}
          margin={'normal'}
          label={'Content'}
          placeholder={'Write some lines\n...on to do!'}
          id={'content'}
          value={content}
          onChange={(e) => this.setState({ content: e.target.value })}
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
            onChange={(e) => this.setState({ category: e.target.value })}>
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
            onClick={this.onFormSubmit}>
            Submit
          </Button>
          <Button raised className={classes.button} onClick={this.onFormSubmit}>
            Cancel
          </Button>
        </div>
      </form>
    )
  }

  onFormSubmit (event) {
    event.preventDefault()

    console.log('Form submited')
  }
}

FormAddNew.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FormAddNew)
