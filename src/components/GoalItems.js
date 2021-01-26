import { Button } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { deleteGoal, updateCompleteGoal } from '../actions/goalsActions';
import {  sendUpdateProfile } from '../actions/userActions'




const GoalItems = (props) => {
    const {id, name, completed, category, point_value} = props

    const handleDelete = () => {
        // e.preventDefault()
        console.log("Delete", id)
        props.deleteGoal(id)
    }

    const handleGoalClick = (e) => {
        if (completed){
            if (props.user.point_wallet > point_value ) {
                const newPoints = props.user.point_wallet - point_value
                props.sendUpdateProfile([{ point_wallet: newPoints}, props.user.id])
                props.updateCompleteGoal([{completed: false}, id])
                // e.target.parentElement.remove()
            } 
        } else {
            const newPoints = (props.user.point_wallet || 0) + point_value
            props.sendUpdateProfile([{ point_wallet: newPoints}, props.user.id])
            props.updateCompleteGoal([{completed: true}, id])
            // e.target.parentElement.remove()
        }
    }

    console.log("props", completed)
    return(
        <>
        {!!completed ?
            <>
            <tr onClick={handleGoalClick} className="complete"> 
            <td >{name}</td>
                <td> {point_value} </td>
                <td><Button id='form-toggle' onClick={handleDelete}>Delete</Button></td>

                {/* <td><Button id='form-toggle' onClick={handleDelete}><i className="far fa-trash-alt"></i></Button></td> */}
            </tr>   
            </>
        :
            <>
            <tr onClick={handleGoalClick} >  
            <td >{name}</td>
                <td> {point_value} </td>
                <td><Button id='form-toggle' onClick={handleDelete}>Delete</Button></td>
            </tr>  
            </>
        }
                
        </>
    )
}

const mapStateToProps = state => ({
    user: state.users
})


// export default GoalItems
export default connect(mapStateToProps, { deleteGoal, sendUpdateProfile, updateCompleteGoal })(GoalItems)

// if complete, add strikethrough
// need a delete button