import React, { Component } from 'react'
import { connect } from 'react-redux'

import { match } from './router'
import Notifications from 'Components/Notifications'
import Nav from 'Components/Nav'
import './App.css'

class App extends Component {
  render() {
    const { route, params } = match(this.props.location.pathname)
    const Page = route.page

    return (
      <div>
        <Nav />
        <hr />
        <Page {...params} />
        <hr />
        <Notifications />
        <pre id="redux-state">{JSON.stringify(this.props.state.user, null, 2)}</pre>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  location: state.location,
  state,
})

export default connect(mapStateToProps)(App);
