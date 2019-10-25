import React from 'react';

class Auth extends React.Component {
  render () {
    return (
      <div>
        <a
          href="http://localhost:5000/auth/google"
          className="ui button secondary"
        >
          Sign in with Google
        </a>
      </div>
    );
  }
}

export default Auth;
