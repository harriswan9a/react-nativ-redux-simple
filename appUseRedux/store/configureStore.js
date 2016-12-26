import { createStore, combineReducers } from 'redux';

import counterReducer from '../reducers/counterReducer';

//可以合併多個reducer
const rootReducer = combineReducers({
    counterReducer
})

//https://github.com/zalmoxisus/redux-devtools-extension
// export default createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);
export default createStore(rootReducer);