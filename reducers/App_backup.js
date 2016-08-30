var defaultState = {
	MASASuser: 0, 	// user login token
	MASASuserPk: null,
	pageTitle: 'home',
	pageType: 0,		// 0 = hamburger icon, 1 = arrow icon
	navSiderbarOpen: false,
}

var login = (dispatch) => {

}

function appReducer(state = defaultState, action) {

	switch(action.type) {
		case 'LOGIN':
			// login(action.token)
			return {
				...state,
				MASASuser: true
			};
		 case 'LOGOUT':
			return {
				...state,
				MASASuser: false
			};
		case 'UPDATE_PAGE_TITLE':
			return {
				...state,
				// pageTitle: action.title,
				// pageType: action.pageType
			};
		case 'TOOGLE_NAV_SIDEBAR':
			return {
				...state,
				navSiderbarOpen: !state.navSiderbarOpen
			};
		case 'UPDATE_USER_PK':
			return {
				...state,
				// MASASuserPk: action.pk
			}
		default:
			return state;
	}
}


export default appReducer
