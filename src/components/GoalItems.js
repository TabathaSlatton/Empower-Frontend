import React from 'react';


const GoalItems = (props) => {

    const handleClick = (e) => {
        // e.target.parentNode

        e.target.parentNode.className === "complete" ? 
            e.target.parentNode.className = "" : 
            e.target.parentNode.className = "complete" 
        console.log("oww!", e.target.className)
    }

    const {id, name, completed, categoty, point_value} = props
    return(
        <>
        {/* onClick toggleComplete */}
        <tr onClick={handleClick}>
                <td >{name}</td>
                <td> {point_value} </td>
                {/* <th> {completed}</th> */}
         </tr>
        </>
    )
}

export default GoalItems

// if complete, add strikethrough
// need a delete button