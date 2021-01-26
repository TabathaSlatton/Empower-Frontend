import React, { useState } from 'react';
import { connect } from 'react-redux';
import GoalItems from './GoalItems'
import { deleteGoal } from '../actions/goalsActions'
import {Table, Button} from 'react-bootstrap'
import {  sendUpdateProfile } from '../actions/userActions'
import { updateCompleteGoal } from '../actions/goalsActions';



const GoalsList = (props) => {
    const [sorted, setSorted] = useState(false);

    // const handleGoalClick = (complete, point_value, goal_id, e) => {
    //     e.preventDefault()
    //     if (complete){
    //         if (props.user.point_wallet > point_value ) {
    //             const newPoints = props.user.point_wallet - point_value
    //             props.sendUpdateProfile([{ point_wallet: newPoints}, props.user.id])
    //             props.updateCompleteGoal([{completed: false}, goal_id])
            
    //         } 
    //     } else {
    //         const newPoints = (props.user.point_wallet || 0) + point_value
    //         props.sendUpdateProfile([{ point_wallet: newPoints}, props.user.id])
    //         props.updateCompleteGoal([{completed: true}, goal_id])
      
    //     }
    // }

    
   const  handleClick = () => {
       setSorted(!sorted)
    }

        return (
            <Table striped>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Point Value <Button onClick={handleClick}>Sort</Button></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                { sorted ?
                <>
                {
                    [...props.goals].filter(goal => goal.user.id === props.user.id).sort((a, b) => a.point_value > b.point_value ? 1 : -1).map(goal => <GoalItems key = {goal.id} {...goal} /> )
                }
                </>
                :
                <>
                {/* handleGoalClick={handleGoalClick} */}
                {props.goals.filter(goal => goal.user.id === props.user.id).map(goal => <GoalItems key = {goal.id} {...goal} /> )}
                </>

                }


                </tbody>
            </Table>
         );
    
};


const mapStateToProps = state => ({
    goals: state.goals,
    user: state.users
})

export default connect(mapStateToProps, { deleteGoal, sendUpdateProfile, updateCompleteGoal })(GoalsList);
