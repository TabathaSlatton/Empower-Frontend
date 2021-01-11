import React, { Component } from 'react'
import Router from "../components/Router"

import NavigationBar from '../components/Navbar';
import { fetchGoals } from '../actions/goalsActions'
import { fetchProducts } from '../actions/productsActions'
import Login from '../components/Login';
import { autoLogin, logout } from '../actions/userActions';


import { connect } from 'react-redux';

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
      this.props.user.id ?
      <>
       <NavigationBar logout={this.props.logout}/> 
       <Router/>
       </>
       : 
       <Login/>
    )
  }  

  render() {
    return (
    <div className="App">  
    <main>{this.renderMainContainer()}</main>
    </div>
    );
  }

}

const mapStateToProps = (state) => (
  {user: state.users}
)

export default connect(mapStateToProps, {fetchGoals, fetchProducts, autoLogin, logout})(App);