import {combineReducers} from 'redux'

import { cartItemsReducer } from './cartItemsReducer'
import { goalsReducer } from './goalsReducer'
import { productsReducer } from './productsReducer'
import { usersReducer } from './usersReducer'
import { wishItemsReducer } from './wishItemsReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    cartItems: cartItemsReducer,
    goals: goalsReducer,
    products: productsReducer,
    wishItems: wishItemsReducer
})