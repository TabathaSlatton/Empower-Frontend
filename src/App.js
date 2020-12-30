import React, { Component } from 'react'
import NavigationBar from './components/Navbar';

import HomePage from './containers/HomePage';
import ProductPage from './containers/ProductPage'
import ProfilePage from './containers/ProfilePage'
import GoalPage from './containers/GoalPage'


import Login from './components/Login';
import Signup from './components/Signup';

import { connect } from 'react-redux';
import { autoLoginRequest } from './services/requests';
import { setProducts } from './actions/actionCreators';
import { Switch, Route } from 'react-router-dom'

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
      point_wallet: null
    },
    signup: false
  }

  componentDidMount(){
    this.props.setProducts()
    if (localStorage.token){
      autoLoginRequest()
      .then(response => {
        console.log(response)
        if (!response.errors){
          this.setUser(response)
        } else {
          alert(response.errors)
        }
      })
    }
  }

  setUser = (response) => {
    this.setState({user: response.user}) 
    localStorage.token = response.token
    console.log("app set user: ", this.state) 
  }

  logout = () => {
    this.setState({user: {
      id: null, 
      email: "", 
      first_name: "",
      last_name: "",
      profile_img_url: "",
      point_wallet: null,
      token: ""
    }})
    localStorage.clear("token")
  }

  toggleSignup = () => this.setState({signup: !this.state.signup})

  renderMainContainer = () => {
    return(
      // we cannot use if statements in jsx
      this.state.user.id ? 
      //  navbar is where I will put a logout button 
      //  <button onClick={this.props.logout}>Logout</button> 
      <NavigationBar logout={this.logout}/>: 
      this.state.signup ? 
      <Signup setUser={this.setUser} toggleSignup={this.toggleSignup}/> :
      <Login setUser={this.setUser} toggleSignup={this.toggleSignup}/>
    )
  }  

  render() {
    return (
    <div className="App">  
    <main>{this.renderMainContainer()}</main>
      <Switch>
        {/* in most specific to less specific */}
        <Route path="/products" component={ ProductPage }/>
        <Route path="/goals" component={ GoalPage }/>
        <Route path="/profile" component={ ProfilePage }/>
        <Route path="/" component={ HomePage }/>
      </Switch>
    </div>
    );
  }

}


export default connect(null, { setProducts })(App);
