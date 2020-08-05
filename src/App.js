import React from 'react';

import './scss/components/common.scss';
import HeaderContainer from './components/header/HeaderContainer';
import { Redirect, Route, HashRouter } from 'react-router-dom';
import MenuContainer from './components/menu/MenuContainer';
import CartContainer from './components/cart/CartContainer';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

const App = (props) => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
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
    </HashRouter>

  );
}

export default App;
