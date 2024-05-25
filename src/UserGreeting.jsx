import PropTypes from 'prop-types'

/* eslint-disable react/prop-types */
function UserGreeting(props) {
    const welcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>

    const loginPrompt = <h2 className="login-prompt">Please login in continue</h2>

    return props.isLoggedIn ? welcomeMsg : loginPrompt

}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}


export default UserGreeting