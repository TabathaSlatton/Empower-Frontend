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

export const addGoal = goal => {
    return dispatch => {
        fetch(API + "/goals", {
            method: 'POST',
            body: JSON.stringify(goal),
            headers: {
            'Content-Type': 'application/json' 
            }
        })
        .then(resp => resp.json())
        .then(goal => dispatch({ 
            type: 'ADD_GOAL', 
            payload: goal}
        ))
    }
}