import React, { Component} from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap'
import { signupRequest } from '../services/requests';

export default class Signup extends Component {
   
    // state makes this a controlled component
    state = {
        email: "", 
        username: "User", 
        firstName: "",
        lastName: "",
        profileImgUrl: "https://www.palettesoftware.com/wp-content/uploads/sites/8/2019/01/Time-to-empower-your-organisation.jpg",
        pointWallet: 0,
        password: "",
        passwordConfirmation: ""
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, username, first_name, last_name, profile_img_url, point_wallet, password, passwordConfirmation} = this.state
        if (password === passwordConfirmation){ 
            const body = {user: {email, username, first_name, last_name, profile_img_url, point_wallet, password }}
            signupRequest(body)
            .then(resp => {
                if (!resp.errors) {
                    this.props.setUser(resp)
                    // console.log(resp)
                } else {
                    alert(resp.errors)
                }
            })
        } else {
            alert("Passwords do not match")
        }
    }

    render(){
        return(
            <div className="home-section">
                <br/>
                <div className="circle-overlay-signup">
                    <h1 id="form-title">Empowerment</h1>  
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formFirstName" className="mx-sm-3 mb-2">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="rName" name="firstName" onChange={this.handleChange} value={this.state.firstName} placeholder="First Name"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formLastName" className="mx-sm-3 mb-2">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="lastName" name="lastName" onChange={this.handleChange} value={this.state.lastName} placeholder="Last Name"></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                        <Col>
                            <Form.Group controlId="formEmail" className="mx-sm-4 mb-1">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="example@email.com"></Form.Control>
                                <Form.Text >We'll never share your email address</Form.Text>
                            </Form.Group>
                        </Col>
                        </Row>
                         <Form.Group controlId="formPassword" className="mx-sm-5 mb-2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formPasswordConfirmation" className="mx-sm-5 mb-2">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" name="passwordConfirmation" onChange={this.handleChange} value={this.state.passwordConfirmation} placeholder="Confirm your password"></Form.Control>
                                </Form.Group>
                        
                    
                    <Button variant="secondary" type="submit" id="form-button">Signup</Button> 
                </Form>
                <br/>
                Already have an account? 
                <Button onClick={this.props.toggleSignup} id="form-toggle">Login</Button>
            </div>
            </div>
        )
    }
}