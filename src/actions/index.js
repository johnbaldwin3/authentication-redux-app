import request from "superagent";
import Cookies from 'js-cookie';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_ERROR = 'SET_ERROR';
export const SET_USER = 'SET_USER';
export const CREATE_USER = "CREATE_USER";

const makeActionCreator = function(actionType) {
    return function(payload) {
        return {type: actionType, payload: payload}
    }
}

export const loadTokenFromCookie = () => {
    return (dispatch) => {
        const token = Cookies.get('token');
        if (token) {
            dispatch(setToken(token));
            dispatch(getDashboard());
        }
    }
}

const setToken = makeActionCreator(SET_TOKEN);
const setError = makeActionCreator(SET_ERROR);
const setUser = makeActionCreator(SET_USER);

const baseURL = "https://user-auth-test.herokuapp.com";
const api = (path) => baseURL + path;

export const login = (email, password) => {
    return (dispatch) => {
        request.post(api("/login")).send({email: email, password: password}).end((err, res) => {
            if (err) {
                return dispatch(setError(res.body.errors));
            } else {
                dispatch(setError(null));
            }

            dispatch(setToken(res.body['auth_token']));
            dispatch(getDashboard(res.body['auth_token']));
            Cookies.set('token', res.body['auth_token'], {expires: 7});
        });
    }
}

const getDashboard = (token) => {
    return (dispatch, getState) => {
        request.get(api("/dashboard")).set('X-AUTH-TOKEN', getState()['token']).end((err, res) => {
            if (err) {
                return dispatch(setError(res.body.errors));
            }
            dispatch(setUser({email: res.body.email, 'full_name': res.body.full_name, message: res.body.message}))
        })
    }
}

// export const CREATE_USER = "CREATE_USER";
// export const LOGIN_USER = "LOGIN_USER";
// export const LOGGED_IN_USER = "LOGGED_IN_USER";
//
const ROOT_URL = 'https://user-auth-test.herokuapp.com';

export const createUser = (userInfo, callback) => {
  let user = JSON.stringify(userInfo);
  console.log(user);
  return (dispatch )=> fetch(`${ROOT_URL}/register`, {
      method: "POST",
      body: user,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }).then( response => {
      if (response.ok) {
        callback();
        return {
          type: CREATE_USER,
          payload: userInfo
        };

      } else
      console.log("Failed");
      this.props.history.push("/failed")
    });

    ;

}

// export const loggedInUser = (results) => {
//   return {
//     type: LOGGED_IN_USER,
//     payload: results
//   }
//
// }

// export const loginUser = (userInfo, callback) => {
//   let user = JSON.stringify(userInfo);
//   return dispatch => fetch(`${ROOT_URL}/login`, {
//     method: "POST",
//     body: user,
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then( response => {
//       if (response.ok) {
//         callback();
//         return console.log("Success");
//
//       } else
//       console.log("Failed");
//     }
//
//   ).then( results => {
//     console.log(results, "results");
//     loggedInUser(results);
//   });
//
// }
