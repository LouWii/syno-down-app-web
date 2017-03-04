
export function addProfile(name, url, port, login, password) {
  return {
    type: 'PROFILE_ADD',
    name,
    url,
    port,
    login,
    password
  }
}

export function deleteProfile(idx) {
  return {
    type: 'PROFILE_DELETE',
    idx
  }
}

export function clientLogin(url) {
  return dispatch => {
    fetch(url, (response) => {
      console.log(response)
      if(response.status === 200){
        dispatch(clientLoggedIn(response.json))
      } else { 
        // console.error(response)
      }
    })
  }
}

export function clientLoggedIn(sid) {
  return {
    type: 'CLIENT_LOGGEDIN',
    sid
  }
}