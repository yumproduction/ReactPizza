import React from 'react';
import AllPizza from './Pizzas/AllPizzas';

import classes from './../../scss/components/menu.module.scss';
import NavContainer from '../nav/NavContainer';



const Menu = (props) => {

    let pizzaElement = props.pizza.map((pizza, index) => <AllPizza key={`${pizza.id}_${index}`} id = {pizza.id}
        cost={pizza.cost} name={pizza.name} length={pizza.length} onAddClick = {props.onAddClick}
        img={pizza.img} booked = {pizza.booked} setLength = {props.setLength} setDought = {props.setDought}/>)
    return <div>
        <NavContainer items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые','Закрытые']} />        <div className={classes.pizzas}>
            {pizzaElement}
        </div>
    </div>
}

export default Menu;