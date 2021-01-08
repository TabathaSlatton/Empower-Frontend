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

export const deleteGoal = goal => {
    return dispatch => {
        fetch(API + "/goals/" + goal.id, {
            method: 'DELETE',
            body: JSON.stringify(goal),
            headers: {
            'Content-Type': 'application/json' 
            }
        })
        .then(resp => resp.json())
        .then(goal => dispatch({ 
            type: 'DELETE_GOAL', 
            payload: goal.id}
        ))
    }
}

// export const updateCompleteGoal = (goalData) => {
//     return dispatch => {
//         const body = {goalData[0]}
//         const id = goalData[1]
//         console.log("id", goalData)
//       fetch(API + '/goals/' + id, {
//         method: 'PATCH', 
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//       })
//       .then(response => response.json())
//       .then(response => {
//     //     dispatch({
//     //     type: "UPDATE_GOAL",
//     //     payload: {user: response.user}
//     //   })
//         console.log(response)
//     })
//     }
//   }
