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
            <section id="home-heading" className="p-5">
                    <div className="dark-overlay">
                        <h1 id="heading-title">Goals</h1>       
                    </div>
                </section><br/><br/>
            <GoalsForm/><br/><br/>
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