import React, { Component} from 'react';
import { connect } from 'react-redux'
import ProfileForm from '../components/ProfileForm';


class ProfilePage extends Component {

    render(){
        return(
            <div>
                <h1>Edit Profile</h1>
                <ProfileForm/>
                <h3>-----------------------------------------------------------------------------</h3>
                <h1>Profile</h1>
                <img src={this.props.user.profile_img_url}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {user: state.users}
)

export default connect(mapStateToProps, {  } )(ProfilePage);