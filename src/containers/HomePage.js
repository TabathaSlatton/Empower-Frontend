import React, { Component } from 'react';
import { connect } from 'react-redux'


class HomePage extends Component {
  render() {
    return (
      this.props.user.id 
      ?
      <div>
         <h1>Welcome to Empower!</h1>
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