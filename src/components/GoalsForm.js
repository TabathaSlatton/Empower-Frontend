import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux'


import { addGoal } from '../actions/goalsActions'

class GoalsForm extends Component {

    state = {
        name: '',
        completed: false,
        category: '',
        point_value: 0,
        // need to access user state to assign
        user_id: null
    }

    handleChange = (e) => {
        const user_id = this.props.user.id
        this.setState({
        [e.target.name]: e.target.value,
        user_id: user_id
         })
    }
 
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addGoal(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <>
            <div id="goals-form">
                <div >
                <h1 id="form-title">New Goal: </h1>
            <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId="formName" className="mx-sm-5 mb-2">
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Goal Title"></Form.Control>
            </Form.Group>   

            <Form.Group controlId="formName" className="mx-sm-5 mb-2">
                <Form.Label>Category: </Form.Label>
                <Form.Control type='text' name='category' value={this.state.category} onChange={this.handleChange} placeholder="Category"></Form.Control>
            </Form.Group>   

             <Form.Group controlId="formName" className="mx-sm-5 mb-2">
                <Form.Label>Point Value: </Form.Label>
                <Form.Control type='number' name='point_value' value={this.state.point_value} onChange={this.handleChange}></Form.Control>
            </Form.Group>  

                <Button type='submit' id="form-button" variant="secondary">Create Goal</Button>

            </Form>
            </div>   
        </div>
            </>
        );
    }
}

const mapStateToProps = (state) => (
    {user: state.users}
)

export default connect(mapStateToProps, { addGoal })(GoalsForm);
