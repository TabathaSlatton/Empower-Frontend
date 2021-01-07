import React from 'react'
import { connect } from 'react-redux'
import ProductCard from '../components/ProductCard'

import {CardColumns, CardGroup} from 'react-bootstrap'


const ProductCards = (props) => {
    console.log(props)
    return(
        <CardColumns width="100%">
        {/* sort/filter will go here */}
        {props.products.map(product => <ProductCard key = {product.id}  {...product}/>)}
        </CardColumns>
    )
}

const msp = (state) => ({
    products: state.products
})

export default connect(msp)(ProductCards);