import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch
}                           from 'react-router-dom'

import { authenticated } from '/imports/routing/containers'

import { Public }               from "/imports/routing/rolers"

import { MainLayout }           from "/imports/layouts"

const App = appProps => (
  <Router>
    <Switch>
      <Public component={ MainLayout } path="/" {...appProps} />
    </Switch>
  </Router>
)


export default authenticated(App)
