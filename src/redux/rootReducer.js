//объединяем все наши редьюсеры
import { combineReducers } from 'redux';
import { likesReducer } from './likesReducer';
import { inputReducer } from './inputReducer';
import { comReducer } from './comReducer';
import { loaderReducer } from './loaderReducer';


export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    comReducer,
    loaderReducer
});
