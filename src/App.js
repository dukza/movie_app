import React from 'react';
import axios from 'axios';

import Movie from './Movie';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Spinner } from 'reactstrap';

import './css/Movie.css'
import './css/common.css'

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
  setStar(value){
    console.log('0')

  }
  render(){
    const {isLoading, movies} = this.state;
    return(
      <>
        <Container fluid>
          <Row>     
            <Container>
              <Row>
                <Col lg={12} className="h5 text-white font-weight-bolder mt-5 mb-5">현재 상영작</Col>
                {isLoading ? 
                <Col lg={12}>
                  <Row>
                    <Col md={12} className="h3 text-white font-weight-light">Loading...</Col>
                    <Col md={12} className="text-danger">
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </Col>
                  </Row>
                </Col> : 
                movies.map( (movie) => {
                  // console.log('movie',movie)
                  return (
                    <Col sm={12} lg={6}>
                      <Row>
                        <Movie key={movie.id}  title={movie.title} year={movie.year} genres={movie.genres} rating={movie.rating} 
                        summary={movie.summary} poster={movie.medium_cover_image}/>
                      </Row>
                    </Col>
                  )
                })}
              </Row>  
            </Container>
          </Row>
        </Container>        
      </>
    )
  }
}

export default App;
  