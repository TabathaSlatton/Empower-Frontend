import React, {Component} from 'react'
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
// import Signup from './components/Signup';

class App extends Component {
  
  state = {
    user: {
      id: null, 
      email: "", 
      first_name: "",
      last_name: "",
      profile_img_url: "",
      point_wallet: null,
      token: ""
    }
  }

  renderMainContainer = () => {
    return(
      // we cannot use if statements in jsx
      this.state.user.id ? 
      <Welcome/> : 
      <Login setUser={this.setUser}/>
    )
  }  

    setUser = (user) => { 
      console.log("user:", user)
      this.setState({user: user.user})  
      console.log("state:", this.state)
    }


  render() {
    return (
    <>
      <h1>
        Empower
      </h1>
      <main>{this.renderMainContainer()}</main>
    </>
    );
  }

}
export default App;
