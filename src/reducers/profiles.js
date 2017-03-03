
function profiles(state = [], action) {
  console.log(action)
  switch(action.type){
    case 'PROFILE_ADD':
      return [
        ...state,
        {name: action.name, url: action.url, login: action.login, password: action.password}
      ]
    default:
      return state
  }
}

export default profiles