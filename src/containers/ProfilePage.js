import React, { Component} from 'react';
import { connect } from 'react-redux'
import ProfileForm from '../components/ProfileForm';


class ProfilePage extends Component {

    render(){
        return(
            <div>
                <section id="profile-heading" className="p-5">
                    <div className="dark-overlay">
                        <h1 id="heading-title">Edit Profile</h1>       
                <ProfileForm/>
                </div>
                </section><br/><br/>

                <section id="home-heading" className="p-5">
                    <div className="dark-overlay">
                        <h1 id="heading-title">{this.props.user.first_name} {this.props.user.last_name}'s Profile</h1>     
                    </div>
                </section><br/><br/>
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

export default connect(mapStateToProps)(ProfilePage);