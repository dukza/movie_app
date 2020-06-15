import React from 'react';
import PropTypes from "prop-types";

function Food({fav,picture,rating}){
  return(
    <>
    <h3>I love {fav}</h3>
    <div>{rating} / 5</div>
    <img src={picture} alt={fav}/>
    </>
  )
}
Food.propTypes = {
  fav:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}

const foodLike = [
  {
    id:1,
    fav:'kimchi',
    picture:'https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    rating:5
  },
  {
    id:2,
    fav:'ramen',
    picture:'https://images.unsplash.com/photo-1561131668-f63504fc549d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
    rating:3
  },
  {
    id:3,
    fav:'choco',
    picture:'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    rating:2.5
  },
  {
    id:4,
    fav:'candy',
    picture:'https://images.unsplash.com/photo-1561101904-da649fcbf03f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    rating:2
  }
]

// function renderFood(dish){
//   // console.log(dish)
//   return <Food fav={dish.fav} picture={dish.picture} />
// }

function App() {
  return (
    <div>
      {/* {console.log(foodLike.map(renderFood))} */}
      {/* {foodLike.map(renderFood)} */}
      {foodLike.map(dish => <Food key={dish.id} fav={dish.fav} pict ure={dish.picture} rating={dish.rating}/>)}
      {/* <Food fav="kimchi" // something={true}
      />
      <Food fav="ramen"/>
      <Food fav="choco"/>
      <Food fav="candy"/> */}
    </div>
  );
}

export default App;
