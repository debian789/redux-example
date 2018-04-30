import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers'
import thunk from 'redux-thunk'

export default configureStore = () => {
    let store = createStore(Reducers, applyMiddleware(thunk))
    return store
}


