import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Checkbox, Divider, Typography, IconButton } from 'material-ui'
import { ListItem, ListItemSecondaryAction } from 'material-ui/List'
import DeleteIcon from 'material-ui-icons/DeleteForever'
import ViewIcon from 'material-ui-icons/Visibility'
import { Link } from 'react-router-dom'

import styles from './styles'
import { todosUpdate, todoDelete } from '../../actions'

class ItemToDo extends Component {
  state = {
    isDone: false,
    redirectToView: false
  }

  componentDidMount () {
    const { toDoInfo: { done } } = this.props

    if (done) this.setState({ isDone: true })
  }

  render () {
    const {
      toDoInfo: { title, category, id },
      todosUpdate,
      user,
      classes,
      todoDelete,
      categoriesByValue,
      ...props
    } = this.props
    const { isDone } = this.state

    return (
      <div {...props}>
        <ListItem className={isDone ? classes.rootDone : null}>
          <Checkbox
            className={classes.checkboxRoot}
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
              {categoriesByValue[category].label}
            </Typography>
          </div>
          <ListItemSecondaryAction>
            <IconButton aria-label={'Delete'} onClick={() => todoDelete(id)}>
              <DeleteIcon className={isDone ? classes.listIconDone : null} />
            </IconButton>
            <Link to={`/todo/${id}`}>
              <IconButton aria-label={'View'}>
                <ViewIcon className={isDone ? classes.listIconDone : null} />
              </IconButton>
            </Link>
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

export default connect(mapStateToProps, { todosUpdate, todoDelete })(withStyles(styles)(ItemToDo))
