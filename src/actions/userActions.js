const API = "http://localhost:3000"

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})


export const autoLogin = () => {
    return dispatch => {
     fetch(API + "/api/v1/autologin", {
        method: 'POST', 
        headers: {
          'Authorization': localStorage.token,
        },
      })
      .then(response => response.json())
      .then(response => {
        dispatch({
        type: "SET_USER",
        payload: {user: response.user}
      })
    })
    }
  }
  
  export const handleLoginFormChange = (e) => ({
    type: "LOGIN_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
  })

  export const sendLogin = (userData) => {
    return dispatch => {
        const body = {user: userData}
      fetch(API + "/api/v1/login", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      .then(response => response.json())
      .then(response => {
        localStorage.token = response.token
        dispatch({
        type: "SET_USER",
        payload: {user: response.user}
      })
    })
    }
  }

  export const sendSignup = (userData) => {
    return dispatch => {
        const body = {user: userData}
      fetch(API + "/api/v1/users", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      .then(response => response.json())
      .then(response => {
        localStorage.token = response.token
        dispatch({
        type: "SET_USER",
        payload: {user: response.user}
      })
    })
    }
  }

  export const sendUpdateProfile = (userData) => {
    return dispatch => {
        const body = {user: userData[0]}
        const id = userData[1]
        console.log("id", userData)
      fetch(API + '/api/v1/users/' + id, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      .then(response => response.json())
      .then(response => {
        localStorage.token = response.token
        dispatch({
        type: "SET_USER",
        payload: {user: response.user}
      })
    })
    }
  }


  export const logout = () => {
    return dispatch => {
      localStorage.clear("token")
      dispatch({type: "LOGOUT"})
    }
  }