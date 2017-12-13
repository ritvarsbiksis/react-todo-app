import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import green from 'material-ui/colors/green'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import _ from 'lodash'

const styles = {
  checked: {
    color: green[500]
  }
}

class FilterBlock extends Component {
  render () {
    const { classes, onCategoryChange, categoriesData, showCategories } = this.props

    return (
      <FormGroup row>
        {_.map(categoriesData, ({ value, label }) => {
          return (
            <FormControlLabel
              key={value}
              control={
                <Checkbox
                  classes={{ checked: classes.checked }}
                  checked={showCategories[value]}
                  onChange={onCategoryChange}
                  value={value}
                />
              }
              label={label}
            />
          )
        })}
      </FormGroup>
    )
  }
}

FilterBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    categoriesData: state.todos.categoriesData
  }
}

export default connect(mapStateToProps)(withStyles(styles)(FilterBlock))
