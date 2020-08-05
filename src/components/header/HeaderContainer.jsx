import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    render() {
        return <Header booked = {this.props.booked} bookedSum = {this.props.bookedSum} fullCost = {this.props.fullCost}/>
    }
}

let mapStateToProps = (state) => ({
    bookedSum: state.cart.bookedSum,
    fullCost: state.cart.fullCost,
    booked: state.cart.booked
})

export default connect(mapStateToProps, {})(HeaderContainer);