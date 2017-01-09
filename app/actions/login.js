import axios from 'axios';

const ROOT_URL = "http://10.0.2.2:3000/";

export const LOGIN_USER = 'LOGIN_USER';

export function login(data) {
  console.log('Data', data.username,data.password);
  if(data) {
    const url = `${ROOT_URL}login?username=${data.username}&password=${data.password}`;
    const request = axios.get(url);
    console.log(request);
    // request.then((r) => {
    //   console.log(r);
    //   return {
    //     type:     FETCH_PRODUCTS,
    //     payload:  r
    //   };
    // });
    return {
      type:   LOGIN_USER,
      payload: request
    };
  }
}
