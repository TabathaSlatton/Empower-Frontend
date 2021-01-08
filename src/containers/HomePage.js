import React, { Component } from 'react';
import { connect } from 'react-redux'


class HomePage extends Component {
  
  render() {
    return (
      this.props.user.id 
      ?
      <div>
         <section id="home-heading" className="p-5">
                    <div class="dark-overlay">
                        <h1 id="heading-title">Welcome to Empower</h1>       
                    </div>
                </section><br/><br/>
        <h2>This is from my homepage container</h2>
      </div>
      :
      <>
      </>
    );
  }
}

const mapStateToProps = (state) => (
  {user: state.users}
)
export default connect(mapStateToProps, { } )(HomePage);