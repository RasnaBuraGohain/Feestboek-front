import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import ContactForm from 'Components/ContactForm'

const ContactView = ({ dispatch }) => (
  <main>
    <h1>The Contact page</h1>
    <ContactForm onContact={() => dispatch(push("/profile"))} />
  </main>
)

export default connect()(ContactView)