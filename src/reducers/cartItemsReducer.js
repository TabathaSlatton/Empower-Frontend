const initialCartItemsState = {
    cartItems: []
}

export const cartItemsReducer = (state = initialCartItemsState, action) => {
    switch(action.type){
        case 'FETCH_CART_ITEMS':
            return {...state, cartItems: action.payload };
        default:
            return state
    } 
}