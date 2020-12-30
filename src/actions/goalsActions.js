const API = "http://localhost:3000"

export const fetchGoals = () => {
    return dispatch => {
        fetch(API + "/goals")
        .then(resp => resp.json())
        .then(goals => dispatch({ 
            type: 'FETCH_GOALS', 
            payload: goals
        }))
    }
}