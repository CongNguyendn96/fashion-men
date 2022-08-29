import React from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import './styles.scss';
import { useDispatch , connect} from 'react-redux';
import { decreaseQtyItem, fetchCartDelete, removeFromCart } from '../../redux/Shopping/shopping-actions';

CartItem.propTypes = {};

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    // dispatch(removeFromCart(itemId))
    dispatch(fetchCartDelete(itemId))
  };
  const handleDecreaseItem = (itemId) => {
    dispatch(decreaseQtyItem(itemId))
  }
  return (
    <Card classes={{ root: 'cart-item' }}>
      <CardMedia
        component="img"
        image={item.image}
        classes={{ root: 'cart-item__img', media: 'cart-item__media' }}
        alt="Live from space album"
      />
      <Typography component="span" variant="h5">
        {item.name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton aria-label="previous" onClick={() => handleDecreaseItem(item.id)}>-</IconButton>
        <Typography variant="span" component="span">
          {item.quantity}
        </Typography>
        <IconButton aria-label="previous">+</IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Button onClick={() => handleRemove(item.id)}>
          <ClearIcon />
        </Button>
      </Box>
    </Card>
  );
}

export default CartItem;
