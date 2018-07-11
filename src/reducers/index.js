import {
    combineReducers
} from 'redux';
import FavorReducers from './favor';
import ListCitiesReducers from './listcities';
import SelectCityReducers from './selectcity';

const allReducers = combineReducers({
    favor: FavorReducers,
    listcities: ListCitiesReducers,
    selectcity: SelectCityReducers
})

export default allReducers;