import React from 'react';
import { Link } from 'react-router'
import Profile from './Profile'

class ProfilesList extends React.Component {
  renderProfile(idx, profile) {
    return (
      <Profile key={idx} profile={profile} />
    )
  }

  render() {
    return (
      <div className="profiles-list container-small">
        <h2>Profiles <Link className="btn btn-default btn-xs" to={'/profile/add'}>+</Link></h2>
        <div className="profiles row-fluid">
          {this.props.profiles.map((profile, idx) => this.renderProfile(idx, profile))}
        </div>
      </div>
    );
  }
}

ProfilesList.propTypes = {
  profiles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default ProfilesList;
