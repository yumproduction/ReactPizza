import React from 'react';
import Menu from './Menu';
import { connect } from 'react-redux';
import { setPizzasLength, setPizzasDough } from '../../redux/pizza-reducer';
import { addBook } from '../../redux/cart-reducer';

class MenuContainer extends React.Component{

    onAddClick = (img, cost, name, id)=>{
        this.props.addBook(img, cost, name, id);
    }

    setLength = (length) => {
        this.props.setPizzasLength(length);
    }

    setDought = (dough)=>{
        this.props.setPizzasDough(dough);
    }

    render(){
       return <Menu onAddClick = {this.onAddClick} pizza = {this.props.pizza} setLength = {this.setLength}
        setDought ={this.setDought}/>
    }
}

let mapStateToProps = (state) =>({
    pizza: state.pizzas.pizza
})

export default connect(mapStateToProps, {setPizzasDough, setPizzasLength, addBook})(MenuContainer);