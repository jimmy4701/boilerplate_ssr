import React, { Component } from 'react'
import { Meteor }           from 'meteor/meteor'
import { withTracker }  from 'meteor/react-meteor-data'

export const authenticated = ( component ) => withTracker(({  }) => {

  const loggingIn           = Meteor.loggingIn()
  const authenticated       = !loggingIn && !!Meteor.userId()
  const isAdmin             = Roles.userIsInRole(Meteor.userId(), ["admin"])

  return { loggingIn, authenticated, isAdmin }
})(component)