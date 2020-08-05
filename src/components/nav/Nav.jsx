import React from 'react';
import classes from './../../scss/components/nav.module.scss';
import { useState } from 'react';

const Navbar = ({ items, filterByName }) => {

    const [activeItem, setActiveItem] = useState(null);

    let onClickCategory = (items, index)=>{
        let name
        if(items === 'Мясные'){
            name = 'meat'
        }
        if(items === 'Вегетарианская'){
            name = 'vegetarian'
        }
        if(items === 'Гриль'){
            name = 'grill'
        }
        if(items === 'Острые'){
            name = 'spicy'
        }
        if(items === 'Закрытые'){
            name = 'closed'
        }
        if(items === 'all'){
            name = 'all'
        }        setActiveItem(index);
        filterByName(name);
    }

    let navigation = items.map((items, index) =>
        <div className={classes.item} key={`${items}_${index}`}>
            <button onClick = {()=>onClickCategory(items, index)} className={'btn ' + classes.navBtn + ' ' + (activeItem === index ? classes.active : '')}>{items}</button>
        </div>)


    return <div className="container">
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <button onClick = {()=>onClickCategory('all', null)} className={'btn ' + classes.navBtn + ' ' + (activeItem === null ? classes.active : '')}>Все</button>
            </div>
            {items && navigation}
        </nav>
    </div>
}

export default Navbar;