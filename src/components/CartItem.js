import React, { Component } from 'react'
import * as mess from '../constants/Messages'
export default class CartItem extends Component {
           
    render() {
        var {item}=this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} alt className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                    <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light"
                                          onClick={()=>this.onUpdateQuantity(item.product,item.quantity-1)}
                                          >
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary 
                                          btn-rounded waves-effect waves-light"
                                          onClick={()=>this.onUpdateQuantity(item.product,item.quantity+1)}
                                          >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.subToTal(item.product.price,item.quantity)}$</td>
                <td>
                    <button 
                        onClick={()=>this.deleteProduct(item)}
                    type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title data-original-title="Remove item">
                        X
                  </button>
                </td>
            </tr>
        )
    }
    subToTal =(a,b)=>{
        return a*b;
    }
    deleteProduct =(item)=>{
        this.props.ondeleteProduct(item.product);
        this.props.onChangeMessage(mess.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    onUpdateQuantity = (product,quantity)=>{
        if(quantity>0){
        var {onUpdateProductInCart}=this.props;
        onUpdateProductInCart(product,quantity);
        this.props.onChangeMessage(mess.MSG_UPDATE_CART_SUCCESS);
        }
    }
}