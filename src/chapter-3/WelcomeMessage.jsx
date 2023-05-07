import React from 'react'

const WelcomeMessage = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <p data-testid="welcome-message">Welcome back!</p> : <p data-testid="guest-message">Please log in.</p>}</div>
}

export default WelcomeMessage
