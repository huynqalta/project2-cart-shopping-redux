import * as types from '../constants/actionType'
import product from '../reducers/products'

export const addToCart=(product,quantity)=>{
    return {
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessage=(message)=>{
    return {
        type:types.CHANGE_MESSAGE,
        message
    }
}
export const deleteProduct=(product)=>{
    return{
        type:types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const updateProductInCart=(product,quantity)=>{
    return {
        type:types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
export const updateEnVenToRy=(product,inventory)=>{
    return{
        type:types.UPDATE_INVENTORY_IN_CART,
        product,
        inventory
    }
}
