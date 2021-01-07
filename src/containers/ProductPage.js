import React, { Component} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import ProductCards from '../components/ProductCards'
class ProductPage extends Component {
  
    render() {
        return(
            this.props.user.id 
            ?
            <div >
                <section id="home-heading" class="p-5">
                    <div class="dark-overlay">
                        <h1 id="heading-title">Products</h1>       
                    </div>
                </section>
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