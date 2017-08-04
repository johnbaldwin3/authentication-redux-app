
export const CREATE_USER = "CREATE_USER";

const ROOT_URL = 'https://user-auth-test.herokuapp.com';

export const createUser = (userInfo, callback) => {
  let user = JSON.stringify(userInfo);
  return (dispatch )=> fetch(`${ROOT_URL}/register`, {
      method: "POST",
      body: user,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }).then( response => {
      console.log(response, "SUCCESS");
    }).catch(error => {
      console.log(error, "FAILED");
    } );

    ;
  return {
    type: CREATE_USER,
    payload: userInfo
  };
}
