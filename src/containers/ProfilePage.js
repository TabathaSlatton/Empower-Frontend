import React, { Component} from 'react';
import { connect } from 'react-redux'
import ProfileForm from '../components/ProfileForm';


class ProfilePage extends Component {

    render(){
        return(
            <div>
                <h1>Edit Profile</h1>
                <ProfileForm/>
                <h1>{this.props.user.first_name} {this.props.user.last_name}'s Profile</h1>
                <img src={this.props.user.profile_img_url}/>
                { this.props.user.point_wallet ?
                    <h3>You have {this.props.user.point_wallet} points available.</h3>
                :
                    <h3>You have no points availabe.</h3>
                }
                {/* wish list here */}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {user: state.users}
)

export default connect(mapStateToProps, {  } )(ProfilePage);