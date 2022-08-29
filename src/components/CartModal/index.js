import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { observer } from 'mobx-react';
import { Box, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import cartApi from '../../apis/cartApi';
import CardControl from '../CartItem';
import CartsNum from '../CartsNum';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartRequest, toggleOpenCart } from '../../redux/Shopping/shopping-actions';

const modalStyle = {
  right: '0',
  border: 'none',
  height: '100%',
  position: 'absolute',
  width: '50%',
  backgroundColor: `#09090A`,
  padding: 20,
};

function CartModal() {
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.shop.cart);
  const isOpen = useSelector((state) => state.shop.isOpen);
  useEffect(() => {
    dispatch(fetchCartRequest())

  }, [dispatch])


  const handleClose = () => {
    dispatch(toggleOpenCart());
  };

  return (
    <div className="cart-modal">
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle}>
          <ShoppingCartIcon />
          <Typography variant="h4" classes={{ h4: 'title' }}>
            Your Shopping Cart
            <CartsNum cartCount={carts.reduce((a, b) => a + b.quantity, 0)} />
          </Typography>

          <Box>
            {carts.map((product, index) => (
              <CardControl item={product} key={index} />
            ))}
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default observer(CartModal);
