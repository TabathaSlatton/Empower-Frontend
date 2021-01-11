import { Button } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { deleteGoal } from '../actions/goalsActions';




const GoalItems = (props) => {
    const {id, name, completed, category, point_value} = props

    const handleClick = (e) => {
        // e.target.parentNode

        e.target.parentNode.className === "complete" ? 
            e.target.parentNode.className = "" : 
            e.target.parentNode.className = "complete" 
    }

    const handleDelete = () => {
        // e.preventDefault()
        console.log("Delete", id)
        props.deleteGoal(id)
    }

    return(
        <>
        <tr onClick={handleClick}>
                <td >{name}</td>
                <td> {point_value} </td>
                <td><Button id='form-toggle' onClick={handleDelete}><i className="far fa-trash-alt"></i></Button></td>
         </tr>
        </>
    )
}



// export default GoalItems
export default connect(null, { deleteGoal })(GoalItems)

// if complete, add strikethrough
// need a delete button