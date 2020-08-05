import React from 'react';
import Navbar from './Nav';
import { connect } from 'react-redux';
import { filterByName } from '../../redux/pizza-reducer';

class NavContainer extends React.Component{
    render(){
       return <Navbar items = {this.props.items} filterByName = {this.props.filterByName}/>
    }
}

let mapStateToProps = ()=>({

})



export default connect( mapStateToProps, {filterByName})(NavContainer);