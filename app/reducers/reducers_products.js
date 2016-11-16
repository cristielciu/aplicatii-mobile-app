import React from 'react';
// import axios from 'axios';

// function retData(data) {
//   console.log(data);
//   return {data: data};
// }

export default async function() {
  // return [
  //   {
  //     name: 'Apple',
  //     description: 'Mmmmm....goood!',
  //     price: '12.33$',
  //     image: 'https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg'
  //   },
  //   {
  //     name: 'Banana',
  //     description: 'Yellow',
  //     price: '4.99$',
  //     image: 'http://www.hdwallpapers.in/walls/minion_bananas-wide.jpg'
  //   },
  //   {
  //     name: 'Pen',
  //     description: 'For writing...',
  //     price: '1.44$',
  //     image: 'http://i1.mirror.co.uk/incoming/article7314107.ece/ALTERNATES/s615b/Blue-Bic-biro-pen.jpg'
  //   }
  // ]

  // return fetch('http://10.0.2.2:3000/products', {method: 'GET'})
  //   .then(res => {
  //     ok = res.ok;
  //     window.Result = res.json();
  //     console.log("DAAA", res.json());
  //     return res.json();
  //   });
  // var response = 'something';
  // var xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = () => {
  //   if(xhr.readyState == 4 && xhr.status == 200) {
  //     console.log('DA in reducer', JSON.parse(xhr.responseText));
  //     response = JSON.parse(xhr.responseText);
  //     return xhr.responseText;
  //   }
  // };
  // xhr.open('GET', 'http://10.0.2.2:3000/products');
  // xhr.send();
  // // return xhr.onreadystatechange();
  // return 'ceva';

  // getProducts().then((pr) => function() {
  //   console.log('UU', pr);
  //   return pr;
  // })




  let response = await fetch('http://10.0.2.2:3000/products', {method: 'GET'}).then((response) => {
    return response.json();
  }).then((data) =>  {
    console.log('REDUCER', data);
    return data;
  });
  console.log('WUUUU', response);
  return response;

  // let a = axios.get('http://10.0.2.2:3000/products');
  // console.log(a);
  // return a;




  // return dispatch => {
  //   dispatch({
  //     ret: null
  //   })
  //   fetch('http://10.0.2.2:3000/products', {method: 'GET'}).then((response) => {
  //     return response.json();
  //   }).then((data) =>  {
  //     console.log('REDUCER', data);
  //     dispatch(ret(data));
  //   });
  // }
}
