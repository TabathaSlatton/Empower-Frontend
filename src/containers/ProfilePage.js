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

export default connect(mapStateToProps, {  } )(ProfilePage);