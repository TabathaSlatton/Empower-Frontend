const API = "http://localhost:3000"

export const fetchProducts = () => {
    return dispatch => {
        fetch(API + "/products")
        .then(resp => resp.json())
        .then(products => dispatch({ 
            type: 'FETCH_PRODUCTS', 
            payload: products
        }))
    }
}