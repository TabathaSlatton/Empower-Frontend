import React, { Component } from 'react';
import { connect } from 'react-redux'


import { addGoal } from '../actions/goalsActions'

class GoalsForm extends Component {

    state = {
        name: '',
        completed: false,
        category: '',
        point_value: null,
        // need to access user state to assign
        user_id: 1
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})
 
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addGoal(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name: </label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                <br/>

                {/* does not work yet, need to create a toggle to change state value */}
                <label>Category: </label>
                <input type='text' name='category' value={this.state.category} onChange={this.handleChange}/>
                <br/>

                <label>Point Value: </label>
                <input type='number' name='point_value' value={this.state.point_value} onChange={this.handleChange}/>
                <br/>

                <label>Complete: </label>
                <input type='checkbox' name='completed' value={this.state.completed} onChange={this.handleChange}/>
                <br/>

                <input type='submit' value='Create Goal' />

            </form>
        );
    }
}

export default connect(null, { addGoal })(GoalsForm);
