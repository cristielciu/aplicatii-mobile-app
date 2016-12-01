import { combineReducers } from 'redux';
import ProductsReducer from './reducers_products';

const rootReducer = combineReducers({
  products: ProductsReducer
});

export default rootReducer;
