import React from 'react'
import { connect } from 'react-redux'
import ProductCards from '../components/ProductCards'
    
const ProductPage = (props) => {

    return(
        <div >
            <section id="home-heading" className="p-5">
                <div className="dark-overlay">
                    <h1 id="heading-title">Products</h1>       
                </div>
            </section>
            <ProductCards/>
        </div>
    )

}

const mapStateToProps = (state) => (
    {user: state.users}
)      

export default connect(mapStateToProps)(ProductPage);