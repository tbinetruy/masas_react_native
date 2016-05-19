// import { combineReducers } from 'redux';
// import routes from './routes';
// import appReducer from './App';
//
//
// export default combineReducers({
//   routes,
//   appReducer
//   // ... other reducers
// });


import {
  combineReducers,
  createStore
} from 'redux'

import appReducer from './App'
// import playerReducer from './Player'
import routesReducer from './routes'

const Reducers = combineReducers({
  appReducer,
  // playerReducer,
  routesReducer,
})


var store = createStore(Reducers)
export default store
