import React from 'react'
import { connect } from 'react-redux'
import { addNotification } from 'store/notifications'

const ContactView = ({ callme }) => (
  <main>
    <h1>The Contact page</h1>
    <button onClick={callme}>Contact Me</button>
  </main>
)

const mapDispatchToProps = dispatch => ({
  callme: () => dispatch(addNotification('Call Me Maybe!')),
})

export default connect(null, mapDispatchToProps)(ContactView)