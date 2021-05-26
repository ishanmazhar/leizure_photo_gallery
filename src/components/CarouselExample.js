import React from 'react';
import { Carousel } from 'react-bootstrap'; 

const CarouselExample = (props) => {
    console.log(props.place); 
    const places = props.place.map((place) => {
        return (
            <Carousel.Item key={place.id}>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + place.image}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    });
        
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
            <Carousel>
                {places}
            </Carousel>
            </div>
        </div>
    )
}

export default CarouselExample; 
