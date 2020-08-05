import React from 'react';
import classes from './../../scss/components/header.module.scss';

import logo from './../../assets/images/logo.svg'
import cart from './../../assets/images/cart.svg'
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return <div className={"container " + classes.header}>
        <div className={classes.logos}>
            <img src={logo} alt="" />
            <div className={classes.logos__text}>
                <h2>React Pizza</h2>
                <p>самая вкусная пицца во вселенной</p>
            </div>
        </div>
        <NavLink to='/cart'>
            <button className={"btn " + classes.cartBtn}>
                <div className={classes.cart}>
                    <img src={cart} alt="" />
                    <div>{props.booked.length}</div>
                </div>
            </button>
        </NavLink>

    </div >
}

export default Header;