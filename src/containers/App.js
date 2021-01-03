import React, { Component } from 'react'
import NavigationBar from '../components/Navbar';

import { fetchGoals } from '../actions/goalsActions'
import { fetchProducts } from '../actions/productsActions'

import Login from '../components/Login';

import { connect } from 'react-redux';
import { autoLogin } from '../actions/userActions';
import { logout } from '../actions/userActions';

import Router from "../components/Router"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  


  componentDidMount(){ 
      localStorage.token && this.props.autoLogin()  
       this.props.fetchGoals()
       this.props.fetchProducts()
  }

  renderMainContainer = () => {
    return(
      this.props.user.id 
      ?
          <>
          <NavigationBar logout={this.props.logout}/>
          {/* <button onClick={this.props.logout}>Logout!</button> */}
          </>
      :
        <Login/>

    )
  }  

  render() {
    return (
    <div className="App">  
    <main>{this.renderMainContainer()}</main>
    <Router/>
    </div>
    );
  }

}

const mapStateToProps = (state) => (
  {user: state.users}
)

export default connect(mapStateToProps, {fetchGoals, fetchProducts, autoLogin, logout})(App);