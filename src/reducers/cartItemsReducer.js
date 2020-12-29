export const cartItemsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CART_ITEMS':
            return action.payload
        default:
            return state
    } 
}