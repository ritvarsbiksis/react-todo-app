import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Checkbox, Divider, Typography, IconButton } from 'material-ui'
import { ListItem, ListItemSecondaryAction } from 'material-ui/List'
import { todosUpdate } from '../../actions'
import DeleteIcon from 'material-ui-icons/DeleteForever'
import ViewIcon from 'material-ui-icons/Visibility'

import styles from './styles'

class ItemToDo extends Component {
  state = {
    isDone: false
  }

  componentDidMount () {
    const { toDoInfo: { done } } = this.props

    if (done) this.setState({ isDone: true })
  }

  render () {
    const { toDoInfo: { title, category, id }, todosUpdate, user, classes, ...props } = this.props
    const { isDone } = this.state

    return (
      <div {...props}>
        <ListItem className={isDone ? classes.rootDone : null}>
          <Checkbox
            classes={{ checked: classes.todoDone }}
            checked={isDone}
            onChange={() => {
              todosUpdate({ userId: user.id, id, data: { done: !isDone } })
              this.setState({ isDone: !isDone })
            }}
          />
          <div className={classes.container}>
            <Typography className={isDone ? classes.todoDone : classes.title} type={'subheading'}>
              {title}
            </Typography>
            <Typography className={classes.category} type={'body1'}>
              {category}
            </Typography>
          </div>
          <ListItemSecondaryAction>
            <IconButton aria-label={'Delete'}>
              <DeleteIcon className={isDone ? classes.listIconDone : null} />
            </IconButton>
            <IconButton aria-label={'View'}>
              <ViewIcon className={isDone ? classes.listIconDone : null} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </div>
    )
  }
}

ItemToDo.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user
  }
}

export default connect(mapStateToProps, { todosUpdate })(withStyles(styles)(ItemToDo))
