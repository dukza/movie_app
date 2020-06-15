import React from 'react';
import axios from 'axios';

import Movie from './Movie';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;



class App extends React.Component{
  constructor(prop){
    super(prop);
    console.log(prop)
  }
  state = {
    isLoading : true
  }
  getMovies = async() => {
    const {data : {data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies)
    this.setState({
      movies, isLoading : false
    })
  }
  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading:false})
    // },6000)
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return(
      <>
        {isLoading ? "Loading..." : movies.map( (movie) => {
          // console.log('movie',movie)
          return (
            <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
          )
        })}
      </>
    )
  }
}

export default App;
  