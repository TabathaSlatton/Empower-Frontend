import React, {Component} from 'react'
import './App.css';
import Welcome from './components/Welcome';
// import Login from './components/Login';
// import Signup from './components/Signup';

class App extends Component {
  state = {
    user: {
      id: null, 
      email: "", 
      first_name: "",
      last_name: "",
      profile_img_url: "",
      point_wallet: null
    }
  }

  render() {
    return (
    <>
      <h1>
        Empower
      </h1>
      <main><Welcome/></main>
    </>
    );
  }

}
export default App;
