import React from 'react';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const DisplayCard = (props) => {
    const sites = props.place.map((site) => {
        return(
            <div key={site.id}>
                <Card body className="display-card">
                    <CardImg width="100%" src={process.env.PUBLIC_URL + site.image} alt={site.name}/>
                    <CardTitle tag="h5">{site.name}</CardTitle>
                    <CardText>{site.description}</CardText>
                    <Button className="btn btn-success"><Link to={`/${props.path}`}>Open Gallery</Link></Button>
                </Card>
            </div>
        );
    });
    return(
        <div>
            <div className="container">

                    {sites}

            </div>
        </div>
    );

}

export default DisplayCard; 