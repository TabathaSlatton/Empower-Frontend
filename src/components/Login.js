import React, { Component} from 'react';
import {Button, Form} from 'react-bootstrap'
import { loginRequest } from '../services/requests';



export default class Login extends Component {
   
    // state makes this a controlled component
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password} = this.state
        // backend is expecting email and password params
        const body = {user: {email: email, password: password}}
        loginRequest(body)
        .then(resp => {
            console.log("login submit", resp)
            if (!resp.errors) {
                this.props.setUser(resp)
            } else {
                alert(resp.errors)
            }
        })
    }

    render(){
        return(
        <div className="home-section">
            <br/>
            <br/>
            <div className="circle-overlay">
            <h1 id="form-title">Empowerment</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formEmail" className="mx-sm-5 mb-2">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="example@email.com"></Form.Control>
                        <Form.Text >We'll never share your email address</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mx-sm-4 mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password"></Form.Control>
                    </Form.Group>
                    <br/>

                    <Button variant="secondary" type="submit" id="form-button">Login</Button> 
                </Form>
                <br/>

                No Account? 
               <Button onClick={this.props.toggleSignup} id="form-toggle">Sign Up</Button> 
           
            </div>
            
        </div>
        )
    }
}