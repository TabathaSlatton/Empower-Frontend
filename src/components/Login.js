import React, { Component} from 'react';

export default class Login extends Component {


    render(){
        return(
            <>
                <h1>This is my Login Component</h1>
                <form>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Login" />
                </form>
            </>
        )
    }
}