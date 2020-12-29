export const favoritePostsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_FAVORITE_POSTS':
            return action.payload
        default:
            return state
    }
}