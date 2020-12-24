import React, {Component} from 'react'
import './App.css';
import NavigationBar from './components/Navbar';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    <div className="App">
      <NavigationBar/>
      <main>{this.renderMainContainer()}</main>
    </div>
    );
  }

}
export default App;
