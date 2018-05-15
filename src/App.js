import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

import { match } from './router'
import Notifications from 'Components/Notifications'
import Nav from 'Components/Nav'
import './App.css'

class App extends Component {
  render() {
    const { dispatch, loggedIn } = this.props

    const { route, params } = match(this.props.location.pathname)
    if (route.loggedIn && !loggedIn) {
      dispatch(push('/'))
      return null
    }

    const Page = route.page
    return (
      <div>
        <Nav />
        <hr />
        <Page {...params} />
        <hr />
        <Notifications />
        <pre id="redux-state">{JSON.stringify(this.props.state, null, 2)}</pre>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  location: state.location,
  loggedIn: state.user.loggedIn,
  state,
})

export default connect(mapStateToProps)(App);
