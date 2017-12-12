import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { withStyles } from 'material-ui/styles'
import { Divider, Button, List } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'
import { Route, HashRouter, Link } from 'react-router-dom'

import styles from './styles'
import PageTitle from '../../components/PageTtitle'
import FormAddNew from './components/FormAddNew'
import ItemToDo from './components/ItemToDo'
import { toDosData } from './utils/dummyData'

class ToDoList extends Component {
  render () {
    const { classes } = this.props
    const AddNewBtn = () => (
      <Link to={'/new'}>
        <Button fab type={'submit'} raised className={classes.addButton}>
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
