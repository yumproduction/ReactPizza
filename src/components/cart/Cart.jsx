import React from 'react';
import classes from './../../scss/components/cart.module.scss';
import { NavLink } from 'react-router-dom';

import face from './../../assets/images/face.svg'
import emptyCart from './../../assets/images/empty.svg'
import cart from './../../assets/images/black_cart.svg'
import garbage from './../../assets/images/garbage.svg'
import cancel from './../../assets/images/cancel.svg'



const Cart = (props) => {

    let pizzas = props.cart.booked.map((pizza, index) => <div key={`${pizza}_${index}`} className={classes.pizza}>
        <div className={classes.counter}>
            <img src={pizza.img} alt="" />
            <h2>{pizza.name}</h2>
        </div>
        <div className={classes.cost}>
            <h2>{pizza.cost} ₽</h2>
        </div>
        <div className={classes.deleteBook} onClick = {()=>props.onDeleteClick(pizza.id)}>
            <img src={cancel} alt="" />
        </div>
    </div>)

    let fullCost = () => {
        let cost = 0;
        for (let i = 0; i < props.cart.booked.length; i++) {
            cost += props.cart.booked[i].cost;
        }
        return cost;
    }

    return props.cart.booked.length === 0 ?
        <div className="container">
            <div className={classes.cart}>
                <h1>Корзина пустая <img src={face} className={classes.headImg} alt="" /></h1>
                <p>Вероятней всего, вы не заказывали ещё пиццу.
         Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                <img src={emptyCart} className={classes.emptyCart} alt="" />
                <div>
                    <NavLink to='/menu'> <button className={"btn " + classes.cartBtn}>Вернуться назад</button></NavLink>
                </div>
            </div>
        </div>
        : <div className="container">
            <div className={classes.cart_container}>
                <div className={classes.header}>
                    <div className={classes.logo}>
                        <img src={cart} alt="" />
                        <h1>Корзина</h1>
                    </div>
                    <div className={classes.reset} onClick={() => props.onResetClick()}>
                        <img src={garbage} alt="" />
                        <p>Очистить корзину</p>
                    </div>
                </div>
                <div className={classes.pizzas}>
                    {pizzas}
                </div>
                <div className={classes.fullBook}>
                    <div className={classes.pizzaCount}>
                        <h2>Всего пицц: <span>{props.cart.booked.length} шт.</span></h2>
                    </div>
                    <div className={classes.pizzaSum}>
                        <h2>Сумма заказа: <span>{fullCost()} ₽</span></h2>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <NavLink to='/menu'> <button className={"btn " + classes.back}><pre><code>&lt;</code></pre> Вернуться назад </button></NavLink>
                    <button className={"btn " + classes.book}>Оплатить сейчас</button>
                </div>
            </div>

        </div>
}

export default Cart;