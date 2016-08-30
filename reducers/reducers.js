import {
  combineReducers,
  createStore
} from 'redux'

import routesReducer from './routes'
import { appReducer, defaultState as appDefaultState } from "./App"
import { headerReducer, defaultState as headerDefaultState } from "./Header"

import { bodyReducer, defaultState as bodyDefaultState } from "./Body"
import { footerReducer, defaultState as footerDefaultState } from "./Footer"
import { loginReducer, defaultState as loginDefaultState } from "./Login"
import { homeReducer, defaultState as homeDefaultState } from "./Home"
import { uploadSCReducer, defaultState as uploadDefaultState } from "./UploadSC"
import { playerReducer, defaultState as playerDefaultState } from "./Player"
import { likesReducer, defaultState as likesDefaultState } from "./Likes"
import { discoverReducer, defaultState as discoverDefaultState  } from "./Discover"
import { legalsReducer, defaultState as legalsDefaultState  } from "./Legals"
import { profileReducer, defaultState as profileDefaultState  } from "./Profile"


const initialState = {
    routesReducer: {},
	headerReducer: headerDefaultState,
    appReducer: appDefaultState,
	bodyReducer: bodyDefaultState,
	footerReducer: footerDefaultState,
	loginReducer: loginDefaultState,
	homeReducer: homeDefaultState,
	uploadSCReducer: uploadDefaultState,
	playerReducer: playerDefaultState,
	likesReducer: likesDefaultState,
	discoverReducer: discoverDefaultState,
	legalsReducer: legalsDefaultState,
	profileReducer: profileDefaultState,
}
const rootReducer = combineReducers({
    routesReducer,
    headerReducer,
    appReducer,
	bodyReducer,
	footerReducer,
	loginReducer,
	homeReducer,
	uploadSCReducer,
	playerReducer,
	likesReducer,
	discoverReducer,
	legalsReducer,
	profileReducer
})


const enhancer = global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : nope => nope
  
var store = createStore(rootReducer, initialState, enhancer)

if (global.reduxNativeDevTools) {
  global.reduxNativeDevTools.updateStore(store);
}

export default store
