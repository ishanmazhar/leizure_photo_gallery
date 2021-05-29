import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import CommentForm from './CommentForm';

const PlaceDetails = (props) => {
    const places = props.place.map((place) => {
        return (
            <Carousel.Item key={place.id}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + place.image}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        )
    });
        
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md m-1">
                    <Carousel>
                        {places}
                    </Carousel>
                    <Card body className="carousel-caption-card">
                        <CardTitle tag="h5">{props.place[0].name}</CardTitle>
                        <CardText>{props.place[0].description}</CardText>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <CommentForm place={props.place} dbPath={props.dbPath} />
                </div>
            </div>
        </div>
    )
}

export default PlaceDetails; 
