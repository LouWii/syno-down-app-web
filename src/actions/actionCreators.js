
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