import React, { Component} from 'react'
import { connect } from 'react-redux';
import GoalItems from './GoalItems'
import { deleteGoal } from '../actions/goalsActions'
import {Table, Button} from 'react-bootstrap'


class GoalsList extends Component {

    state = {
        sorted: false
    }
    
    handleClick = (e) => {
       this.setState({sorted: !this.state.sorted})
    }

    render(){
        return (
            <Table striped>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Point Value <Button onClick={this.handleClick}>Sort</Button></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                { this.state.sorted ?
                <>
                {
                    [...this.props.goals].filter(goal => goal.user.id === this.props.user_id).sort((a, b) => a.point_value > b.point_value ? 1 : -1).map(goal => <GoalItems key = {goal.id} {...goal}/> )
                }
                </>
                :
                <>
                {this.props.goals.filter(goal => goal.user.id === this.props.user_id).map(goal => <GoalItems key = {goal.id} {...goal}/> )}
                </>

                }


                </tbody>
            </Table>
         );
    }
    
};


const mapStateToProps = state => ({
    goals: state.goals,
    user_id: state.users.id
})

export default connect(mapStateToProps, { deleteGoal })(GoalsList);
