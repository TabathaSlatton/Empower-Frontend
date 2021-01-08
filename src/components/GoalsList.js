import React from 'react';
import { connect } from 'react-redux';
import GoalItems from './GoalItems'
import { deleteGoal } from '../actions/goalsActions'
import {Table} from 'react-bootstrap'


const GoalsList = ( props ) => {

    return (
        <Table striped>
            <thead>
            <tr>
                <th>Name</th>
                <th>Point Value</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* {props.products.map(product => <ProductCard key = {product.id}  {...product}/>)} */}
            {props.goals.map(goal => <GoalItems key = {goal.id} {...goal}/> )}
            </tbody>
        </Table>
     );
};


const mapStateToProps = state => {
    return { goals: state.goals }
}



export default connect(mapStateToProps, { deleteGoal })(GoalsList);
