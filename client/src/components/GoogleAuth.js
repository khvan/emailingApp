import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions/index';


class GoogleAuth extends React.Component {
  componentDidMount () {
    window.gapi.load ('client:auth2', () => {
      window.gapi.client
        .init ({
          clientId: '228127683122-g38rsvp3ji39kkaishm8va3h0pbtup8t.apps.googleusercontent.com',
          scope: 'email',
        })
        .then (() => {
          this.auth = window.gapi.auth2.getAuthInstance ();
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen (this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  }
  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton () {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button onClick = {this.onSignOutClick} className="ui red google button">
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick= {this.onSignInClick} className="ui red google button">
            <i className="google icon" />
            Sign in with Google
          </button>
        </div>
      );
    }
  }
  render () {
    return <div>{this.renderAuthButton ()}</div>;
  }
}

const mapStateToProps = (state)=>{
  return {isSignedIn: state.auth.isSignedIn};
}

export default connect(
  mapStateToProps,
  {signIn,signOut}
  )(GoogleAuth);
