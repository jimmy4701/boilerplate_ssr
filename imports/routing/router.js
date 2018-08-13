import React, { Component } from 'react'
import { Meteor }           from 'meteor/meteor'

import {
  BrowserRouter as Router,
  Switch
}                           from 'react-router-dom'

import { authenticated } from '/imports/routing/containers'

import { Public }               from "/imports/routing/rolers"

import { MainLayout }           from "/imports/layouts"

const App = app_props => (
  <Router>
    <Switch>
      <Public component={ MainLayout } path="/" {...app_props} />
    </Switch>
  </Router>
)


export default authenticated(App)
