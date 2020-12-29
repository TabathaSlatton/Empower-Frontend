export const quizzesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_QUIZZES':
            return action.payload
        default:
            return state
    }
}