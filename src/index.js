import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

const theme = createMuiTheme()
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root')
)

registerServiceWorker()
