import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Formik } from 'formik'; 

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

    const CommentForm = (props) => {
        return (
            <Card body className="display-card">
            <CardTitle tag="h5">Add a comment</CardTitle>
            <Formik 
                initialValues={
                    {
                        email: "",
                        password: "",
                        passwordConfirm: "",
                    }
                }
                onSubmit={
                    (values) => {
                        console.log("Values: ", values);
                    }
                }
            >

            {({ values, handleChange, handleSubmit, errors })=> (
                <div style={{
                    border: "1px grey solid",
                    padding: "15px",
                    borderRadius: "7px", 
                }}>
                    <form onSubmit={handleSubmit}>
                        <textarea style={{height:"120px"}}
                            name="email"
                            placeholder="Your Comment Here"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <br />
                        <button type="submit" className="btn btn-success">Post Comment</button>
                    </form>
                </div>)
            }
            </Formik>
            </Card>
        )
    }

    const RenderComment = (props) => {
        return (
            <div>
                <Card body className="display-card">
                    <CardTitle tag="h5">{props.place[0].name}</CardTitle>
                    <CardText>{props.place[0].description}</CardText>
                </Card>
                <CommentForm />
            </div>
        )
    }
        
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7 m-1">
                    <Carousel>
                        {places}
                    </Carousel>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderComment place={props.place}/>
                </div>
            </div>
        </div>
    )
}

export default CarouselExample; 
