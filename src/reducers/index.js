import {combineReducers} from 'redux';
import superheroesreducer from './superheroesreducer';

export default combineReducers({
    superheroes: superheroesreducer
})