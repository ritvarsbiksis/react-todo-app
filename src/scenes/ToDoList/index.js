import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { withStyles } from 'material-ui/styles'
import { Divider, Button, List, Typography } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'
import { Route, HashRouter, Link } from 'react-router-dom'

import styles from './styles'
import PageTitle from '../../components/PageTtitle'
import FormAddNew from './components/FormAddNew'
import ItemToDo from './components/ItemToDo'
import { todoFetch } from './actions/index'

class ToDoList extends Component {
  state = {
    isToDosData: false
  }

  componentDidMount () {
    const { todoFetch, user: { id }, todosById } = this.props

    if (_.isEmpty(todosById)) todoFetch(id)
  }

  componentWillReceiveProps (nextProps) {
    const { isToDosData } = this.state

    if (_.isEmpty(nextProps.todosById) && isToDosData) this.setState({ isToDosData: false })
    else if (!_.isEmpty(nextProps.todosById) && !isToDosData) this.setState({ isToDosData: true })
  }

  render () {
    const { classes } = this.props
    const { isToDosData } = this.state

    const AddNewBtn = () => (
      <Link to={'/new'}>
        <Button fab type={'submit'} color={'accent'} raised className={classes.addButton}>
          <AddIcon />
        </Button>
      </Link>
    )

    return (
      <div>
        <PageTitle title={'ToDos'} />
        <HashRouter hashType={'noslash'}>
          <div>
            <Route path={'/'} exact component={AddNewBtn} />
            <Route path={'/new'} component={FormAddNew} />
          </div>
        </HashRouter>
        <div className={classes.root}>
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

ToDoList.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user,
    todosById: state.todos.todosById
  }
}

export default connect(mapStateToProps, { todoFetch })(withStyles(styles)(ToDoList))
