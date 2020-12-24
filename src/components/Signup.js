import React, { Component} from 'react';

export default class Signup extends Component {
   
    // state makes this a controlled component
    state = {
        email: "", 
        firstName: "",
        lastName: "",
        profileImgUrl: "",
        pointWallet: 0,
        password: "",
        passwordConfirmation: ""
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, first_name, last_name, profile_img_url, point_wallet, password, passwordConfirmation} = this.state
        if (password === passwordConfirmation){ 
            const body = {user: {email, first_name, last_name, profile_img_url, point_wallet, password }}
            fetch('http://localhost:3000/api/v1/users', {
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
                    console.log(resp)
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
            <>
                <h1>This is my Signup Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Username:
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        First Name:
                        <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Profile Imagine URL:
                        <input type="text" name="profileImgUrl" onChange={this.handleChange} value={this.state.profileImgUrl} />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Password Confirmation:
                        <input type="password" name="passwordConfirmation" onChange={this.handleChange} value={this.state.passwordConfirmation}/>
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Signup" />
                </form>
                <br/>
                <br/>
                Already have an account? 
                <button onClick={this.props.toggleSignup}>Login</button>
            </>
        )
    }
}