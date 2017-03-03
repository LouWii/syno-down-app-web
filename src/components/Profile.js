import React, { Component } from 'react';
import '../styles/Profile.css';

class Profile extends Component {

  render() {
    return (
      <div className="profile">
        <header>{this.props.profile.name}</header>
        <div className="content">
          <p><strong>URL</strong> {this.props.profile.url}</p>
          <p><strong>Login</strong> {this.props.profile.login}</p>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  profile: React.PropTypes.object.isRequired
}

export default Profile