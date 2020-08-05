import React from 'react';
import classes from './../../../scss/components/menu.module.scss';
import { useState } from 'react';


const AllPizza = (props) => {

    let [activeDough, setActiveDough] = useState(1);
    let [activeLength, setActiveLength] = useState(1);

    return <div className="container">
        <div className={classes.pizza}>
            <div className={classes.img}>
                <img src={props.img} alt="" />
            </div>
            <h4>{props.name}</h4>
            <div className={classes.choises}>
                <div className={classes.doughs}>
                    <button onClick={() => {
                        setActiveDough(1)
                        // props.setDought('тонкое')
                    }} className={classes.dough + ' ' + (activeDough === 1 && classes.active)}>тонкое</button>
                    <button onClick={() => {
                        setActiveDough(2)
                        // props.setDought('традиционное')
                    }} className={classes.dough + ' ' + (activeDough === 2 && classes.active)}>традиционное</button>
                </div>
                <div className={classes.lengths}>
                    <button onClick={() => {
                        setActiveLength(1)
                        props.setLength('26')
                    }} disabled={props.length[0] === false} className={classes.length + ' ' + (props.length[0] ? null : classes.disabled) + ' ' + (activeLength === 1 && classes.active)}>26см</button>
                    <button onClick={() => {
                        setActiveLength(2)
                        props.setLength('30')

                    }} disabled={props.length[1] === false} className={classes.length + ' ' + (props.length[1] ? null : classes.disabled) + ' ' + (activeLength === 2 && classes.active)}>30см</button>
                    <button onClick={() => {
                        setActiveLength(3)
                        props.setLength('40')

                    }} disabled={props.length[2] === false} className={classes.length + ' ' + (props.length[2] ? null : classes.disabled) + ' ' + (activeLength === 3 && classes.active)}>40см</button>
                </div>
            </div>
            <div className={classes.cost}>
                <h4>от {props.cost} ₽</h4>
                <button onClick={()=>props.onAddClick(props.img, props.cost, props.name, props.id)} className={"btn " + classes.add}>+ Добавить</button>
            </div>
        </div>
    </div>
}

export default AllPizza;