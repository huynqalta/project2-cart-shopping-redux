import * as types from '../constants/actionType'
var data=JSON.parse(localStorage.getItem('CART'));

var inittialState=data?data:[];

const cart=(state=inittialState,action)=>{
    var {product,quantity}=action;
    var index=-1;
    switch(action.type){
        case types.ADD_TO_CART:
            index =findProductInCart(state,product);
            if(index!==-1){
                state[index].quantity+=quantity;
            }else{
                state.push({
                    product,
                    quantity});
            }
           localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
            case types.DELETE_PRODUCT_IN_CART:
                index=findProductInCart(state,product);
                if(index!==-1){
                    //nhớ đay là xóa đi cái vị trí
                    state.splice(index,1);
                }
                localStorage.setItem('CART',JSON.stringify(state));
                return [...state];
            case types.UPDATE_PRODUCT_IN_CART:
                index=findProductInCart(state,product);
                if(index!==-1){
                    state[index].quantity=quantity;
                }
                localStorage.setItem('CART',JSON.stringify(state));
                return [...state];
            case types.UPDATE_INVENTORY_IN_CART:
                index=findProductInCart(state,product);
                if(index!==-1){
                    state[index].product.inventory=action.inventory;
                }
                localStorage.setItem('CART',JSON.stringify(state));
                return [...state];
        default: return [...state];
    }
}
var findProductInCart=(cart,product)=>{
    var index=-1;
    if(cart.length>0){
        for(var i=0;i<cart.length;i++){
            if(cart[i].product.id===product.id){
                index=i;
                break;
            }
        }
    }
    return index;
}
export default cart;
