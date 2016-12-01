import { FETCH_PRODUCTS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      // return state.concat([action.payload.data]);
      return action.payload;
  }
  // console.log(action);
  // Promise.resolve(action).then(n => {
  //           console.log("n:", n);
  //           return n;
  //       })
  // console.log("Recv: ", action.payload._65);
  return state;
}
