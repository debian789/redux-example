import {combineReducers} from 'redux';
import superheroesreducer from './superheroesreducer';
import tabBarReducer from './tabBarReducer'
import dataReducer from './dataReducer'

export default combineReducers({
    superheroes: superheroesreducer,
    tabId: tabBarReducer,
    data: dataReducer
})