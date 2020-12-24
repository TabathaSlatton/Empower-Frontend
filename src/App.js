import React, {Component} from 'react'
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';

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
    },
    signup: false
  }

  setUser = (user) => this.setState({user: user.user})  

  toggleSignup = () => this.setState({signup: !this.state.signup})

  renderMainContainer = () => {
    return(
      // we cannot use if statements in jsx
      this.state.user.id ? 
      <Welcome/> : 
      this.state.signup ? <Signup setUser={this.setUser} toggleSignup={this.toggleSignup}/> :<Login setUser={this.setUser} toggleSignup={this.toggleSignup}/>
    )
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
