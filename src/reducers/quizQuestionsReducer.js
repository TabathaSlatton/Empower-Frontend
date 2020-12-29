export const quizQuestionsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_QUIZ_QUESTIONS':
            return action.payload
        default:
            return state
    }
}