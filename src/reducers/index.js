import {combineReducers} from 'redux';
import superheroesreducer from './superheroesreducer';
import tabBarReducer from './tabBarReducer'
export default combineReducers({
    superheroes: superheroesreducer,
    tabId: tabBarReducer
})