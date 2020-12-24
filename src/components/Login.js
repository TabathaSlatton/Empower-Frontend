import React, { Component} from 'react';

import {Button, Card, Form} from 'react-bootstrap'



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
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        .then(resp => resp.json())
        .then(resp => {
            if (!resp.errors) {
                this.props.setUser(resp)
            } else {
                alert(resp.errors)
            }
        })
    }

    render(){
        return(
            <>
                <h1>Empowerment</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="example@email.com"></Form.Control>
                        <Form.Text className="text-muted">We'll never share your email address</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password"></Form.Control>
                    </Form.Group>
                    <Button variant="secondary" type="submit">Login</Button> 
                </Form>
                <br/>
                No Account? 
                <Button onClick={this.props.toggleSignup}>Sign Up</Button>
            </>
        )
    }
}