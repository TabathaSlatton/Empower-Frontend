const initialGoalsState = {
    goals: []
}

export const goalsReducer = (state = initialGoalsState, action) => {
    switch(action.type){
        case 'FETCH_GOALS':
            return {...state, goals: action.payload };
        default:
            return state
    }
} 