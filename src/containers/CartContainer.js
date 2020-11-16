import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart';
import PropsTypes from 'prop-types';
import * as types from '../constants/Messages'
import * as action from '../actions/index'
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
 class CartContainer extends Component {
    render() {
        var {cart}=this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showToTalAmont(cart)}
            </Cart>
        )
    };
    showCartItem = (cart) =>{

        var result=<tr><td>{types.MSG_CART_EMPTY}</td></tr>;
        if(cart.length >0){
            result=cart.map((item,index)=>{
                return <CartItem 
                            key={index}
                            index={index}
                            item={item}
                            ondeleteProduct={this.props.ondeleteProduct}
                            onChangeMessage={this.props.onChangeMessage}
                            onUpdateProductInCart={this.props.onUpdateProductInCart}
                />
            })
            return result;
        }
        return result;
    }
    showToTalAmont=(cart)=>{
        var result=null;
        if(cart.length>0){
            result=<CartResult cart={cart} />
        }
        return result;

    }
  
}
CartContainer.propTypes ={
    cart : PropsTypes.arrayOf(
        PropsTypes.shape({
            product:PropsTypes.shape({
                id:PropsTypes.number.isRequired,
                name:PropsTypes.string.isRequired,
                image:PropsTypes.string.isRequired,
                description:PropsTypes.string.isRequired,
                price:PropsTypes.number.isRequired,
                inventory:PropsTypes.number.isRequired,
                rating:PropsTypes.number.isRequired
            }).isRequired,
            quantity:PropsTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage:PropsTypes.func.isRequired,
    onUpdateProductInCart:PropsTypes.func.isRequired,
    ondeleteProduct:PropsTypes.func.isRequired
}
const mapStateToProps=state=>{
    return {
      cart:state.cart,
     
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        ondeleteProduct:(cart)=>{
            dispatch(action.deleteProduct(cart));
        }
        ,
        onChangeMessage:(message)=>{
            dispatch(action.changeMessage(message))
        },
        onUpdateProductInCart:(product,quantity)=>{
            dispatch(action.updateProductInCart(product,quantity));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);