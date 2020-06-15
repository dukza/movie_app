import React from 'react';


function Food({fav}){
  // console.log(props);
  // console.log(props.fav);
  console.log({fav});
  return(
    <h2>I Love {fav}</h2>
  )
}

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
    </div>
  );
}