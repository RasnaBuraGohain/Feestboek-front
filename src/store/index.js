import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { reducer as userReducer, userMiddleware } from './user'
import { reducer as notificationsReducer } from './notifications'
import thunk from 'redux-thunk';

const history = createBrowserHistory()

const rootReducer = combineReducers({
    form: formReducer,
    location: routerReducer,
    user: userReducer,
    notifications: notificationsReducer,
})

const middleware = applyMiddleware(thunk, routerMiddleware(history), userMiddleware)

const store = createStore(rootReducer, middleware)

startListener(history, store)

export default store
