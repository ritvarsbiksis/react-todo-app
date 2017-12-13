import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'
// import { helloSaga } from './sagas'

const theme = createMuiTheme()
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(reducers, {}, applyMiddleware(thunk))
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// sagaMiddleware.run(helloSaga)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root')
)

registerServiceWorker()
