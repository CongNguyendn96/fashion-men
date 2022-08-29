import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartsNum from '../../components/CartsNum';

import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpenCart } from '../../redux/Shopping/shopping-actions';

function Header() {
  const dispatch = useDispatch();
  let data = useSelector(state => state.shop.cart)

  const handleOpen = () => {
    dispatch(toggleOpenCart());
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to={'/products'} className="header__logo">
          <h1>MEN FASHION</h1>
        </Link>
        <nav className="header__menu">
          <Link to={'/products/add'} className="header__menu__item">
            Add New Product
          </Link>
          <Button onClick={handleOpen}>
            <ShoppingCartIcon />

            <CartsNum cartCount={data.reduce((a, b) => a + b.quantity, 0)} />
          </Button>
        </nav>
      </div>
      <div></div>
    </header>
  );
}

export default observer(Header);
