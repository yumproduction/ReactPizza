import React from 'react';

import './scss/components/common.scss';
import HeaderContainer from './components/header/HeaderContainer';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import MenuContainer from './components/menu/MenuContainer';
import CartContainer from './components/cart/CartContainer';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store = {store}>
        <div className="App">
          <div className='wrapper'>
            <HeaderContainer />
            
            <Route exact path='/' render={() => <Redirect to={'/menu'} />} />
            <Route path='/menu' render={() => <MenuContainer />} />
            <Route path='/cart' render={() => <CartContainer />} />

          </div>
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
