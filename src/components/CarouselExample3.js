import React from 'react';
import { Carousel } from 'react-bootstrap'; 

const CarouselExample = (props) => {
    console.log(props.place); 
    const places = props.place.map((place) => {
        return (
            <div key={place.id} className="container p-2">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + place.image}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + place.image}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + place.image}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    })
    return (
        <div className="d-flex justify-content-center">
            {places}
        </div>
    )
}

export default CarouselExample; 