import React from 'react';

const ProductCard = (props) => {
    console.log(props)
    const {id, point_cost, img_url, name} = props
    console.log(point_cost)
    return(
        <>
        <div className="card" style={{width: "50%"}}>
            <h1>{name}</h1>
            <img src={img_url} alt={name} /><br/>
            <h6>{point_cost}</h6>
        </div><br/>
        </>
    )
}

export default ProductCard
