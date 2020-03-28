import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {
    openSideBar,
} from '../actions/sidebar-actions';
import {
    setTheme,
} from '../actions/theme-ations';


const intialState = {
    theme: '',
    sideBar: {
        open: ''
    }
}
const middleware = [thunk]
const store = createStore(rootReducer, intialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

store.subscribe(v => console.log(store.getState()));
store.dispatch(openSideBar())
store.dispatch(setTheme())
export default store;