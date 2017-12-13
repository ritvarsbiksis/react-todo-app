import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import { Button, Typography } from 'material-ui'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import styles from './styles'
import PageTitle from '../../components/PageTtitle'

class ToDoView extends Component {
  render () {
    const { classes, match: { params: { todoID } }, todosById, categoriesData } = this.props
    const { title, content, category, done } = todosById[todoID]
    const categoriesByValue = _.keyBy(categoriesData, 'value')

    return (
      <div className={classes.contentWrapper}>
        <PageTitle title={title} />
        <Typography className={classes.subheading} type={'subheading'}>
          {'Content'}
        </Typography>
        <Typography className={classes.headline} type={'headline'}>
          {content}
        </Typography>
        <Typography className={classes.subheading} type={'subheading'}>
          {'Status'}
        </Typography>
        <Typography className={classes.headline} type={'headline'}>
          {done ? 'Done' : 'In Progress'}
        </Typography>
        <Typography className={classes.subheading} type={'subheading'}>
          {'Category'}
        </Typography>
        <Typography className={classes.headline} type={'headline'}>
          {categoriesByValue[category].label}
        </Typography>
        <Link to={'/'}>
          <Button className={classes.button} raised>
            Back to List
          </Button>
        </Link>
      </div>
    )
  }
}

ToDoView.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    todosById: state.todos.todosById,
    categoriesData: state.todos.categoriesData
  }
}

export default connect(mapStateToProps)(withStyles(styles)(ToDoView))
