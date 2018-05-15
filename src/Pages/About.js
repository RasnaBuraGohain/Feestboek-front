import React from 'react'
import { connect } from 'react-redux'
import { addNotification } from 'store/notifications'

const AboutView = ({ hello }) => (
    <main>
        <h1>The About page</h1>
        <button onClick={hello}>hello</button>
    </main>
)

const mapDispatchToProps = dispatch => ({
    hello: () => dispatch(addNotification('Hello there!')),
})

export default connect(null, mapDispatchToProps)(AboutView)
