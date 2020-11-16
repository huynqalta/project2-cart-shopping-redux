import React, { Component } from 'react'
import { connect } from 'react-redux'
import Products from '../components/Products';
import Product from '../components/Product';
import PropsTypes from 'prop-types';
import * as action from '../actions/index'
import message from '../reducers/message';
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
        var {addToCart,onChangeMessage,onUpdateInventory}=this.props;
        if(products.length>0){
            result = products.map((product,index)=>{
                return <Product key={index} product={product} addToCart={addToCart} onChangeMessage={onChangeMessage} onUpdateInventory={onUpdateInventory}/>
            })
        }
        return result;
     };
}
ProductsContainer.propTypes ={
    products : PropsTypes.arrayOf(
        PropsTypes.shape({
            id:PropsTypes.number.isRequired,
            name:PropsTypes.string.isRequired,
            image:PropsTypes.string.isRequired,
            description:PropsTypes.string.isRequired,
            price:PropsTypes.number.isRequired,
            inventory:PropsTypes.number.isRequired,
            rating:PropsTypes.number.isRequired
        })
    ).isRequired,
    addToCart:PropsTypes.func.isRequired,
    onChangeMessage:PropsTypes.func.isRequired,
    onUpdateInventory:PropsTypes.func.isRequired
}
const mapStateToProps=state=>{
    return {
        products:state.products,
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        addToCart:(product)=>{
            dispatch(action.addToCart(product,1))
        },
        onChangeMessage:(message)=>{
            dispatch(action.changeMessage(message))
        },
        onUpdateInventory:(product,inventory)=>{
            dispatch(action.updateEnVenToRy(product,inventory))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);