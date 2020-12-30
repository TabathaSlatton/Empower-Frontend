export const wishItemsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_WISH_ITEMS':
            return action.payload;
        default:
            return state
    } 
}