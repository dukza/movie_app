import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col , Badge} from 'reactstrap';

function Movie({id,title,year,genres,rating,summary,poster}){
    return(
        <>
            <Col md={12} className="mb-5">
                <Row>
                    <Col sm={12} className="h3 text-white font-weight-light d-md-none">{title}</Col>
                    <Col sm={12} className="h5 text-white font-weight-light d-md-none">{year}</Col>
                    <Col md={6} className="float-right">
                        <img className="w-100 shadow-lg" src={poster} alt={title} title={title}/>
                    </Col>  
                    <Col md={6}>
                        <Row>
                            <Col md={12} className="h3 text-white font-weight-light d-none d-md-block">{title}</Col>
                            <Col md={12} className="h5 text-white d-none d-md-block">{year}</Col>
                            <Col md={12} className="text-white mt-3 mt-md-0 ">
                                <Row>
                                    <ul md={12} className="list-unstyled pl-3">
                                        {genres.map((genre,index)=>{
                                            return(
                                                <li className="d-inline-block" key={index}><Badge className="font-weight-light mr-1" variant="dark">{genre}</Badge></li>
                                            )
                                        })}
                                    </ul>
                                </Row>
                            </Col>
                            <Col md={12} className="text-white mt-3">{rating}</Col>
                            <Col md={12} className="text-white-50 mt-3">
                                {summary.slice(0,140)}...
                            </Col>                            
                        </Row>
                    </Col>                   
                </Row>
            </Col>

        </>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
