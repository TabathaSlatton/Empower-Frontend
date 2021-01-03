const initialLoginForm = {
  email: "",
  username: "",
  password: "",
  passwordConfirmation: "",
  firstName: "",
  lastName: "",
  profileImgUrl: "https://www.palettesoftware.com/wp-content/uploads/sites/8/2019/01/Time-to-empower-your-organisation.jpg",
  pointWallet: null
}

const initialState = {
  id: null,
  email: null,
  signup: false,
  loginForm: initialLoginForm
}

export const usersReducer = (state=initialState, action) => {
  switch (action.type){
    case "TOGGLE_SIGNUP":
      return {...state, signup: !state.signup}
    case "LOGIN_FORM_CHANGE":
      return {...state, loginForm: {
        ...state.loginForm,
        [action.payload.name]: action.payload.value
      }}
    case "SET_USER":
      console.log({...state, ...action.payload.user})
      return {...state, ...action.payload.user}
    case "LOGOUT":
      return {...state, username: null, id: null}      
    default:
      return {...state}
  }
}

