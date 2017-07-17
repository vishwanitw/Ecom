import { combineReducers } from 'redux'
import { routerReducer as routing } from 'preact-router-redux'
import HomeReducer from './homeReducer'
import CategoriesReducer from './CategoriesReducer'
import ProductsReducer from './ProductsReducer'
import AllCategoriesReducer from './AllCategoriesReducer'
import CurrentProductsReducer from './CurrentProductReducer'

const rootReducer = combineReducers({    
  home: HomeReducer,
  categories : CategoriesReducer,
  products : ProductsReducer,
  AllCategories : AllCategoriesReducer,
  currrentproduct : CurrentProductsReducer,
  routing
})

export default rootReducer
