import React, { Component} from 'react';

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
        const body = {email: email, password: password}
        fetch('http://localhost:3000/api/v1/logiv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        .then(resp => resp.json())
        .then()
    }

    // fetch('http://localhost:3000/api/v1/profile', {
    //     method: 'GET',
    //     headers: {
    //     Authorization: `Bearer <token>`
    //      }
    // })

    render(){
        return(
            <>
                <h1>This is my Login Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </label>
                    <input type="submit" value="Login" />
                </form>
            </>
        )
    }
}