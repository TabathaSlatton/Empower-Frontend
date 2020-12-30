import React, { Component} from 'react'
import { connect } from 'react-redux'

import { fetchGoals } from '../actions/goalsActions'
class GoalPage extends Component {

    componentDidMount() {
        this.props.fetchGoals()
    }
    
    render() {
        return(
            <div>
            <h1>Goals</h1>
            {/* {props.products.map(product => <ProductCard key = {product.id}  {...product}/>)} */}
            </div>
        )
    }
}

export default connect(null, { fetchGoals } )(GoalPage);