import axios from 'axios';

const ROOT_URL = "http://10.0.2.2:3000/";

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function fetchProducts() {
  const url = `${ROOT_URL}products`;
  const request = axios.get(url);
  // console.log(request.);
  // request.then((r) => {
  //   console.log(r);
  //   return {
  //     type:     FETCH_PRODUCTS,
  //     payload:  r
  //   };
  // });
  return {
    type:   FETCH_PRODUCTS,
    payload: request
  };
}
