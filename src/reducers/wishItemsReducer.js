const initialWishItemsState = {
    wishItems: []
}

export const wishItemsReducer = (state = initialWishItemsState, action) => {
    switch(action.type){
        case 'FETCH_WISH_ITEMS':
            return {...state, wishItems: action.payload };
        default:
            return state
    } 
}