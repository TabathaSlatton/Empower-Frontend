import React, { Component} from 'react'
import { connect } from 'react-redux'
import ProductCards from '../components/ProductCards'
class ProductPage extends Component {
  
    render() {
        return(
            this.props.user.id 
            ?
            <div >
                <h1>Products</h1>
                <ProductCards/>
            </div>
            :
            <>
            </>
        )
    }

}

const mapStateToProps = (state) => (
    {user: state.users}
)      

export default connect(mapStateToProps, {  } )(ProductPage);