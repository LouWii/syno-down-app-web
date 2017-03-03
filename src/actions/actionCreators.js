
export function addProfile(name, url, login, password) {
  return {
    type: 'PROFILE_ADD',
    name,
    url,
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