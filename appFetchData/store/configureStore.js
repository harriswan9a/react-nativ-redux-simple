import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk'

import counterReducer from '../reducers/counterReducer';
import authReducer from '../reducers/authReducer';


//可以合併多個reducer
const rootReducer = combineReducers({
    counterReducer,
    authReducer
})

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}


//https://github.com/zalmoxisus/redux-devtools-extension
// export default createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);
// export default createStore(rootReducer);
export default createStore(rootReducer, applyMiddleware(thunk));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   const store = createStore(rootReducer, preloadedState, composeEnhancers(
//     applyMiddleware(...middleware)
//   ));

// export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());