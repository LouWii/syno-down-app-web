import React from 'react';
import '../styles/Client.css'

class Client extends React.Component {
  constructor(props) {
    super(props)
    const { idx } = this.props.params;
    const profile = this.props.profiles[idx];
    this.state = { profile, idx }
  }

  componentDidMount() {
    // Build our API object
    let url = this.state.profile.url
    if (this.state.profile.port && this.state.profile.port !== '') {
      url += ':'+this.state.profile.port
    } else {
      url += ':5000'
    }
    url += `/webapi/auth.cgi?api=SYNO.API.Auth&version=2&method=login&accou
nt=${this.state.profile.login}&passwd=${this.state.profile.password}&session=DownloadStation&format=cookie`
    this.props.clientLogin(url)
  }

  render() {
    return (
      <div className="client">
        <h2>{this.state.profile.name}</h2>
      </div>
    )
  }
}

Client.propTypes = {
  profiles: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default Client;