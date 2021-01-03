import React, { Component} from 'react';
import { connect } from 'react-redux'


class ProfilePage extends Component {

    render(){
        return(
            <div>
                <h1>Profile</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {user: state.users}
)

export default connect(mapStateToProps, {  } )(ProfilePage);