import React from 'react';
import {connect} from 'react-redux';

class Auth extends React.Component {
  render () {
    return (
      <div>
        <a
          href="/auth/google"
          className="ui google green button"
          style = {{
            "background-image": "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"}}
        >
         <label style={{"color": "grey"}}> Sign in with Google</label>
        </a>
      </div>
    );
  }
}



export default Auth;
