import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import { helloSaga } from './sagas'

const theme = createMuiTheme()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(helloSaga)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root')
)

registerServiceWorker()
