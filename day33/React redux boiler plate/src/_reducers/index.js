import { combineReducers } from 'redux';

import { users } from "./user.reducer";
import { carts } from "./cart.reducer";
import { products } from "./product.reducer";

const rootReducer = combineReducers({
    users,
    carts,
    products
})

export default rootReducer;