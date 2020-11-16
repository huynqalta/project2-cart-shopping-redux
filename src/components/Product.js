import React, { Component } from 'react'
import * as mess from '../constants/Messages'

export default class Product extends Component {
    render() {
        var {product}=this.props;
        console.log("product",product);
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image} className="img-fluid" alt />
                        <a>
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>{this.ShowRating(product.rating)} </li>
                             
                        </ul>
                        <p className="card-text">{product.description}</p>
                        <div className="card-footer">
                            <span className="left">Giá:{product.price}$</span>
                            <span className="center">Hiện có :{product.inventory}</span>
                            <span className="right">
                                <a
                                onClick={()=>this.addToCart(product,product.inventory-1)}
                                className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    ShowRating (rating){
        var result=[];
        for(var i=1;i<=rating;i++){
            result.push(<i key={i} className="fa fa-star"></i>)
        }
        for (var j=1;j<=(5-rating);j++){
            result.push(<i key={j+i} className="fa fa-star-o"></i>)
        }
        return result;
    }
    addToCart=(product,inventory)=>{
        this.props.addToCart(product);
        this.props.onChangeMessage(mess.MSG_ADD_TO_CART_SUCCESS);
        if(inventory>0){
            this.props.onUpdateInventory(product,inventory);
        }
       
    }
}
