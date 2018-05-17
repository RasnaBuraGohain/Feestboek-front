import React from 'react'
import { connect } from 'react-redux'
import Timer from 'Components/Timer'
import DeregisterForm from 'Components/DeregisterForm'

const Profile = ({ username }) => (
    <main>
        <h1>Welcome, {username}!</h1>
        <p>What would you like to do?</p>
        <ul>
            <li>Tom posted 3 pictures in <b>HORI2ON DU T3K AFTERPARTY!</b></li>
            <li>Rasna posted 54 pictures in <b>HORI2ON DU T3K!</b></li>
            <li>Mike commented on <b>HORI2ON DU T3K!</b></li>
            <li>Party ended with 163 attendees: <b>HORI2ON DU T3K!</b></li>
            <li>Party started: <b>HORI2ON DU T3K! AFTERPARTY</b></li>
            <li>George shared <b>HORI2ON DU T3K! AFTERPARTY</b> to <b>HORI2ON DU T3K!</b></li>
            <li>Nikos created a new party: <b>HORI2ON DU T3K! AFTERPARTY</b></li>
            <li>Mike commented on <b>HORI2ON DU T3K!</b></li>
            <li>Tom commented on <b>HORI2ON DU T3K!</b></li>
            <li>Olmo update the location of <b>HORI2ON DU T3K!</b></li>
            <li>Party started: <b>HORI2ON DU T3K!</b></li>
            <li>George invited you to <b>HORI2ON DU T3K!</b></li>
            <li>Mike will attend <b>HORI2ON DU T3K!</b></li>
            <li>Nikos commented on <b>HORI2ON DU T3K!</b></li>
            <li>Olmo created a new party: <b>HORI2ON DU T3K!</b></li>
        </ul>
        <Timer />
        <h1>Delete account</h1>
        <p>Warning, this will permanently delete your account. Your invitation code remains invalidated.</p>
        <DeregisterForm />
    </main>
)

const mapStateToProps = state => ({
    username: state.user.profile.username,
    email: state.user.profile.email,
})


export default connect(mapStateToProps)(Profile)
