import React from 'react';
import { connect } from 'react-redux';
import GoalItems from './GoalItems'

const GoalsList = ({ goals }) => {
        
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Point Value</th>
                {/* <th>Complete</th> */}
            </tr>
            </thead>
            <tbody>
            {/* {props.products.map(product => <ProductCard key = {product.id}  {...product}/>)} */}
            {goals.map(goal => <GoalItems key = {goal.id} {...goal}/> )}
            </tbody>
        </table>
     );
};


const mapStateToProps = state => {
    return { goals: state.goals }
}

export default connect(mapStateToProps)(GoalsList);
