import React, { Component} from 'react';
import { connect } from 'react-redux'
import ProfileForm from '../components/ProfileForm';
import {Image, Col, Row, Container } from 'react-bootstrap'




class ProfilePage extends Component {

    render(){
        return(
            <div>
                <section id="profile-form-background" className="p-5">
                    <div className="dark-overlay">
                        <h1 id="heading-title">Edit Profile</h1>       
                <ProfileForm/>
                </div>
                </section><br/><br/>
                <section id="profile-heading" className="p-5">
                    {/* <div className="dark-overlay"> */}
                        {/* <img src={this.props.user.profile_img_url}/> */}
                        <Container>
                            <Row>
                                <Col xs={6} md={2}>
                                    {/* <p> test</p> */}
                                    <Image src={this.props.user.profile_img_url} thumbnail roundedCircle />
                                </Col>
                                <Col xs={6} md={10}>
                                    <h1 id="profile-heading-title">{this.props.user.first_name} {this.props.user.last_name}'s Profile </h1>
                                </Col>
                                
                                {/* <Col xs={6} md={4}>
                                <Image src="holder.js/171x180" roundedCircle />
                                </Col>
                                <Col xs={6} md={4}>
                                <Image src="holder.js/171x180" thumbnail />
                                </Col> */}
                            </Row>
                        </Container>
                    {/* </div> */}
                </section><br/><br/>
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