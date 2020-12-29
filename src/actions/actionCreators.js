const API = "http://localhost:3000"

export const like = () => ({type: "ADD_LIKE"})

// thunk allows us to return a function that takes in an argument of dispatch then use it 
export const setProducts = () => {
    return dispatch => {
        fetch(API + "/products")
        .then(resp => resp.json())
        .then(products => dispatch({
            type: "FETCH_PRODUCTS",
            payload: products
        })
    )}
}