import {combineReducers} from 'redux'
import { cartItemsReducer } from './cartItemsReducer'
import { favoritePostsReducer } from './favoritePostsReducer'
import { goalsReducer } from './goalsReducer'
import { postsReducer } from './postsReducer'
import { productsReducer } from './productsReducer'
import { quizQuestionsReducer } from './quizQuestionsReducer'
import { quizzesReducer } from './quizzesReducer'
import { usersReducer } from './usersReducer'
import { wishItemsReducer } from './wishItemsReducer'



export const rootReducer = combineReducers({
    users: usersReducer,
    cartItems: cartItemsReducer,
    favoritePosts: favoritePostsReducer,
    goals: goalsReducer,
    posts: postsReducer,
    products: productsReducer,
    quizzes: quizzesReducer,
    quizQuestions: quizQuestionsReducer,
    wishItems: wishItemsReducer

})