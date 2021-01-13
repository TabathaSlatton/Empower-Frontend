import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from '../containers/HomePage';
import ProductPage from '../containers/ProductPage'
import ProfilePage from '../containers/ProfilePage'
import GoalPage from '../containers/GoalPage'

const Router = () => {
    return(
        <Switch>
          {/* in most specific to less specific */}
          <Route path="/products" component = { ProductPage }/>
          <Route path="/goals" component = { GoalPage }/>
          <Route path="/profile" component = { ProfilePage }/>
          <Route exact path="/" component = { HomePage }/>
      </Switch>
    );
};

export default Router;