import React, { Component } from 'react'
import { connect } from 'react-redux'
import Products from '../components/Products';
import Product from '../components/Product';
import PropsTypes from 'prop-types';
 class ProductsContainer extends Component {
    render() {
        var {products}=this.props;
        return (
            <Products>
                {this.ShowProduct(products)}
            </Products>
        )
    };
    ShowProduct (products) {
        var result=null;
        if(products.length>0){
            result = products.map((product,index)=>{
                return <Product key={index} product={product} />
            })
        }
        return result;
     };
}
ProductsContainer.propTypes ={
    products : PropsTypes.arrayOf(
        PropsTypes.shape({
            id:PropsTypes.number,
            name:PropsTypes.string,
            image:'https://www.ifd-pforzheim.de/images/ifdpforzheimde/714-iphone-11-pro-max-apple-3342.jpg',
            description:PropsTypes.string,
            price:'510',
            inventory:15,
            rating:5
        })
    ).isRequired
}
const mapStateToProps=state=>{
    return {
        products:state.products,
    }
}

export default connect(mapStateToProps,null)(ProductsContainer);