import React, { Component} from 'react'
import { connect } from 'react-redux'


import { fetchProducts } from '../actions/productsActions'
import ProductCards from '../components/ProductCards'
// import ProductCard from '../components/ProductCard'

class ProductPage extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }
    
    render() {
        return(
            <div >
            <h1>Products</h1>
            <ProductCards/>
            {/* {props.products.map(product => <ProductCard key = {product.id}  {...product}/>)} */}
            </div>
        )
    }

}



export default connect(null, { fetchProducts } )(ProductPage);