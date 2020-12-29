import React from 'react';

const ProductCard = (props) => {
    const {imgUrl, name} = props
    return(
        <div className="card">
            <img src={imgUrl} alt={name} /><br/>
            <p>{name}</p>
        </div>
    )
}

export default ProductCard
