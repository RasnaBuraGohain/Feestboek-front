import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

import Link from 'Components/Link'
import LogoutButton from 'Components/LogoutButton';

const Nav = ({ dispatch, username, loggedIn }) => {
    if (loggedIn) {
        return (
            <nav>
                <Link to="/profile">Profile</Link>
                <Link to="/about">About</Link>
                <Link to="/party/create">Create party</Link>
                <Link to="/party/search">Search party</Link>
                <LogoutButton onLogout={() => dispatch(push("/"))} />
            </nav>
        )
    }

    return (
        <nav>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn,
    username: state.user.loggedIn ? state.user.profile.username : '',
})

export default connect(mapStateToProps)(Nav)
