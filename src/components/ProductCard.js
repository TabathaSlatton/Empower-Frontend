import React from 'react';

import {Card, Button} from 'react-bootstrap'


const ProductCard = (props) => {
    console.log(props)
    const {id, point_cost, img_url, name} = props
    console.log(point_cost)
    return(
        <>
        <Card>
            {/* heart icon to add to wish list---needs functionality */}
            <header> <Button id="save-button"><i class="far fa-heart"></i></Button> </header>
            <Card.Title id="card-title">{name}</Card.Title>
            <Card.Img src={img_url} alt={name} /><br/>
            <Card.Body>{point_cost} points</Card.Body>
            <footer> <Button id="form-toggle">Add to Cart</Button> </footer><br/>

            <br/>
        </Card>
        </>
    )
}

export default ProductCard
