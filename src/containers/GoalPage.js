import React, { Component} from 'react'
import { connect } from 'react-redux'

import GoalsForm from '../components/GoalsForm'
import GoalsList from '../components/GoalsList'
class GoalPage extends Component {

    
    render() {
        return(
            this.props.user.id 
            ?
            <div>
            <h1>Goals</h1>
            <GoalsForm/>
            <GoalsList/>
            </div>
            :
            <>
            </>
        )
    }
}

const mapStateToProps = (state) => (
    {user: state.users}
)

export default connect(mapStateToProps, { } )(GoalPage);