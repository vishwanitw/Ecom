import { combineReducers } from 'redux'
import { routerReducer as routing } from 'preact-router-redux'
import HomeReducer from './homeReducer'
import CategoriesReducer from './CategoriesReducer'

const rootReducer = combineReducers({    
  home: HomeReducer,
  categories : CategoriesReducer,
  routing
})

export default rootReducer
