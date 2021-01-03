import React, { Component} from 'react'
import { connect } from 'react-redux'

import GoalsForm from '../components/GoalsForm'
import GoalsList from '../components/GoalsList'
class GoalPage extends Component {

    
    render() {
        return(
            <div>
            <h1>Goals</h1>
            <GoalsForm/>
            <GoalsList/>
            </div>
        )
    }
}

export default connect(null, { } )(GoalPage);