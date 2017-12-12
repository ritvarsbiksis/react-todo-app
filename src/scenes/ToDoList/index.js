import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { withStyles } from 'material-ui/styles'
import { Divider, Button, List } from 'material-ui'

import styles from './styles'
import PageTitle from '../../components/PageTtitle'
import FormAddNew from './components/FormAddNew'
import ItemToDo from './components/ItemToDo'
import { toDosData } from './utils/dummyData'

class ToDoList extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <PageTitle title={'ToDos'} />
        <Button type={'submit'} raised className={classes.button}>
          Add New
        </Button>

        <FormAddNew />

        <div className={classes.root}>
          <List>
            <Divider />
            {_.map(toDosData, (toDoObj) => <ItemToDo key={toDoObj.id} toDoInfo={toDoObj} />)}
          </List>
        </div>
      </div>
    )
  }
}

ToDoList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ToDoList)
