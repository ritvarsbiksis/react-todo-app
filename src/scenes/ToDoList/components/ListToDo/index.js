import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { withStyles } from 'material-ui/styles'
import { Divider, List, Typography, Button } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'

import styles from './styles'
import PageTitle from '../../../../components/PageTtitle'
import ItemToDo from '../ItemToDo'
import { todoFetch } from '../../actions'
import FormAddNew from '../FormAddNew'

class ListToDo extends Component {
  state = {
    isToDosData: false,
    showForm: false
  }

  componentDidMount () {
    const { todoFetch, user: { id }, todosById } = this.props

    const { isToDosData } = this.state

    if (_.isEmpty(todosById)) todoFetch(id)
    else {
      if (_.isEmpty(todosById) && isToDosData) this.setState({ isToDosData: false })
      else if (!_.isEmpty(todosById) && !isToDosData) this.setState({ isToDosData: true })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isToDosData } = this.state

    if (_.isEmpty(nextProps.todosById) && isToDosData) this.setState({ isToDosData: false })
    else if (!_.isEmpty(nextProps.todosById) && !isToDosData) this.setState({ isToDosData: true })
  }

  render () {
    const { classes } = this.props
    const { isToDosData, showForm } = this.state

    const AddNewBtn = () => (
      <Button
        fab
        type={'submit'}
        color={'accent'}
        onClick={() => this.setState({ showForm: !showForm })}
        raised
        className={classes.addButton}>
        <AddIcon />
      </Button>
    )

    return (
      <div>
        <PageTitle title={'ToDos'} />
        {!showForm && <AddNewBtn />}
        <div className={classes.root}>
          {showForm && (
            <FormAddNew onClickCancelBtn={() => this.setState({ showForm: !showForm })} />
          )}
          {isToDosData ? (
            this.renderToDoList()
          ) : (
            <Typography type={'headline'} gutterBottom>
              No data
            </Typography>
          )}
        </div>
      </div>
    )
  }

  renderToDoList () {
    const { todosById } = this.props
    const sortedTodos = _.chain(todosById).orderBy('id', 'desc').value()

    return (
      <List>
        <Divider />
        {_.map(sortedTodos, (toDoObj) => <ItemToDo key={toDoObj.id} toDoInfo={toDoObj} />)}
      </List>
    )
  }
}

ListToDo.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user,
    todosById: state.todos.todosById
  }
}

export default connect(mapStateToProps, { todoFetch })(withStyles(styles)(ListToDo))
