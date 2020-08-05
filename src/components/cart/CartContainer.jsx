import React from 'react';
import Cart from './Cart';
import { connect } from 'react-redux';
import { resetCart, deleteBook, computeCost } from '../../redux/cart-reducer';

class CartContainer extends React.Component{

    onResetClick = () =>{
        this.props.resetCart();
    }

    onDeleteClick = (id) =>{
        this.props.deleteBook(id);
    }

    computeCost = (cost) =>{
       this.props.computeCost(cost);
    }

    render(){
       return <Cart cart = {this.props.cart} onDeleteClick = {this.onDeleteClick} 
       onResetClick = {this.onResetClick} computeCost = {this.computeCost}/>
    }
}

let mapStateToProps = (state) =>({
    cart: state.cart
})

export default connect(mapStateToProps, {resetCart, deleteBook, computeCost})(CartContainer);