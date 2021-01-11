// const initialGoalsState = {
//     goals: []
// }


// reducers take in an initial state and an action
export const goalsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_GOALS':
            return  action.payload;
        case 'ADD_GOAL':
            return [...state, action.payload]
        case 'DELETE_GOAL':
            let newGoals = state.filter(goal => goal.id !== action.payload)
            return [...newGoals]
        default:
            return state
    }
} 

// case 'FETCH_GOALS':
//     return {...state, goals: action.payload };