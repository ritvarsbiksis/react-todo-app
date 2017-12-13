import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { withStyles } from 'material-ui/styles'
import { Divider, List, Button } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'

import styles from './styles'
import PageTitle from '../../../../components/PageTtitle'
import ItemToDo from '../ItemToDo'
import { todoFetch } from '../../actions'
import FormAddNew from '../FormAddNew'
import FilterBlock from '../FilterBlock'

class ListToDo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isToDosData: false,
      showForm: false,
      showCategories: {},
      categoriesByValue: {}
    }
    this.renderToDoList = this.renderToDoList.bind(this)
  }

  componentWillMount () {
    const { categoriesData } = this.props
    const categoriesByValue = _.keyBy(categoriesData, 'value')
    let showCategories = {}

    _.map(categoriesData, ({ value }) => {
      showCategories = { ...showCategories, [value]: true }
    })

    this.setState({ showCategories, categoriesByValue })
  }

  componentDidMount () {
    const { todoFetch, user: { id }, todosById } = this.props
    const { isToDosData } = this.state

    if (_.isEmpty(todosById)) {
      todoFetch(id)
      this.setState({ showForm: true })
    } else {
      if (_.isEmpty(todosById) && isToDosData) this.setState({ isToDosData: false, showForm: true })
      else if (!_.isEmpty(todosById) && !isToDosData) this.setState({ isToDosData: true })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isToDosData } = this.state

    if (_.isEmpty(nextProps.todosById) && isToDosData) {
      this.setState({ isToDosData: false, showForm: true })
    } else if (!_.isEmpty(nextProps.todosById) && !isToDosData) {
      this.setState({ isToDosData: true, showForm: false })
    }
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
          {isToDosData && this.renderToDoList()}
        </div>
      </div>
    )
  }

  renderToDoList () {
    const { todosById } = this.props
    const { showCategories, categoriesByValue } = this.state
    const sortedTodos = _.chain(todosById)
      .filter(({ category }) => showCategories[category])
      .orderBy('id', 'desc')
      .value()

    return (
      <div>
        <FilterBlock
          showCategories={showCategories}
          onCategoryChange={({ target }, checked) => {
            this.setState(({ showCategories }) => ({
              showCategories: { ...showCategories, [target.value]: checked }
            }))
          }}
        />
        <List>
          <Divider />
          {_.map(sortedTodos, (toDoObj) => (
            <ItemToDo categoriesByValue={categoriesByValue} key={toDoObj.id} toDoInfo={toDoObj} />
          ))}
        </List>
      </div>
    )
  }
}

ListToDo.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.common.user,
    todosById: state.todos.todosById,
    categoriesData: state.todos.categoriesData
  }
}

export default connect(mapStateToProps, { todoFetch })(withStyles(styles)(ListToDo))
