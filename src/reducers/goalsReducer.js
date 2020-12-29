export const goalsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_GOALS':
            return action.payload
        default:
            return state
    }
}