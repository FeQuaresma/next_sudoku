import { legacy_createStore as createStore } from 'redux' //Trocar para @reduxjs/toolkit
import { devToolsEnhancer } from 'redux-devtools-extension'

import reducer from 'reducers'

function configureStore(initialState = {}) {
  const store = createStore(reducer, initialState, devToolsEnhancer({}))
  return store
}

export default configureStore
