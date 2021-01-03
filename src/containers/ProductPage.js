import React, { Component} from 'react'
import { connect } from 'react-redux'
import ProductCards from '../components/ProductCards'
class ProductPage extends Component {
  
    render() {
        return(
            <div >
                <h1>Products</h1>
                <ProductCards/>
            </div>
        )
    }

}

export default connect(null, {  } )(ProductPage);