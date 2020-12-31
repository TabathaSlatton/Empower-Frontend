import React from 'react';
import { connect, connet } from 'react-redux';

const GoalsList = ({ goals }) => {
        
    return (
        <div>
            {/* {props.products.map(product => <ProductCard key = {product.id}  {...product}/>)} */}
            {goals.map(goal => <ul><li key={goal.id}>{goal.name}</li></ul>)}
        </div>
     );
};


const mapStateToProps = state => {
    return { goals: state.goals }
}

export default connect(mapStateToProps)(GoalsList);
