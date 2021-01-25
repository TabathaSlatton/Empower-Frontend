import React from 'react';
import { connect } from 'react-redux'
import ProfileForm from '../components/ProfileForm';
import {Image, Col, Row, Container } from 'react-bootstrap'


const ProfilePage = (props) => {

    return(
        <div>
            <section id="profile-form-background" className="p-5">
                <div className="dark-overlay">
                    <h1 id="heading-title">Edit Profile</h1>       
                    <ProfileForm/>
                </div>
            </section><br/><br/>
            <section id="profile-heading" className="p-5">
                    <Container>
                        <Row>
                            <Col xs={6} md={2}>
                                <Image src={props.user.profile_img_url} thumbnail roundedCircle />
                            </Col>
                            <Col xs={6} md={10}>
                                <h1 id="profile-heading-title">{props.user.first_name} {props.user.last_name}'s Profile </h1>
                            </Col>
                        </Row>
                    </Container>
            </section><br/><br/>
            { props.user.point_wallet ?
                <h3>You have { props.user.point_wallet } points available.</h3>
            :
                <h3>You have no points availabe.</h3>
            }
            {/* wish list here */}
        </div>
    )
}

const mapStateToProps = (state) => (
    {user: state.users}
)

export default connect(mapStateToProps)(ProfilePage);