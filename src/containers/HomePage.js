import React, { Component } from 'react';
import { connect } from 'react-redux'
import AboutUs from '../components/Home/AboutUs';
import HomeCarousel from '../components/Home/HomeCarousel';
import Resources from '../components/Home/Resources';



class HomePage extends Component {
  
  render() {
    return (
      <div>
          <HomeCarousel/><br/><br/>
          <AboutUs/><br/>
          <Resources/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {user: state.users}
)
export default connect(mapStateToProps, { } )(HomePage);