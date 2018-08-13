import React, { Component } from "react"

//packages
import { Switch }           from 'react-router-dom'
import { Helmet }           from "react-helmet"
import { ToastContainer } from 'react-toastify'


// routes
import { Public } from '/imports/routing/rolers'

// Pages
import { Landing } from '/imports/pages'

import { Grid, Image } from 'semantic-ui-react'

export default class MainLayout extends Component {

  render(){

    return(
      <div id="main-layout">

        <Helmet>
          <title>Steady Cook Ambassadeurs</title>
          <meta name="robots" content="index, follow" />
          <meta name="description" content="Prospectez et inscrivez des restaurateurs / fournisseurs sur Steady Cook, et touchez vos commissions en fin de chaque mois." />
        </Helmet>

        <ToastContainer />

        <main>
            <div className="main-container">
              <Switch>
                  <Public component={ Landing }  exact path="/" { ...this.props } />
              </Switch>
            </div>
        </main>

      </div>
    )
  }
}
