import React from 'react';


const GoalItems = (props) => {
    // console.log(props)
     const {id, name, completed, categoty, point_value} = props
    return(
        <>
        <tr>
                <th>{name}</th>
                <th> {point_value} </th>
                {/* <th> {completed}</th> */}
         </tr>
        </>
    )
}

export default GoalItems

// if complete, add strikethrough
// need a delete button