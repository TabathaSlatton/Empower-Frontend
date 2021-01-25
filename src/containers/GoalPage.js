import React from 'react'
import GoalsForm from '../components/GoalsForm'
import GoalsList from '../components/GoalsList'

const GoalPage = () => {

        return(
            <div>
            <section id="home-heading" className="p-5">
                    <div className="dark-overlay">
                        <h1 id="heading-title">Goals</h1>       
                    </div>
                </section><br/><br/>
            <GoalsForm/><br/><br/>
            <GoalsList/>
            </div>
        )

}

export default GoalPage;
