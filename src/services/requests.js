
export const autoLoginRequest = () => {
    return fetch("http://localhost:3000/api/v1/autologin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      }
    })
    .then(response => response.json())
  }
  
  export const loginRequest = (body) => {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(response => response.json())
  }
  
  export const signupRequest = (body) => {
    return fetch('http://localhost:3000/api/v1/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(response => response.json())
  }