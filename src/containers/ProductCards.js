import React from 'react'
import { connect } from 'react-redux'
import ProductCard from '../components/ProductCard'

const ProductCards = (props) => {
    // console.log(props.products)
    return(
        <div className="cards">
        {props.products.map(product => <ProductCard key = {product.id}  {...product}/>)}
        </div>
    )
}

const msp = (state) => ({
    products: state.products.products
})

export default connect(msp)(ProductCards);