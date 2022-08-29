import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ButtonText from '../common/Button';

import './styles.scss';
import { addToCart, fetchCartPost, fetchCartPut, saveCartItem } from '../../redux/Shopping/shopping-actions';

Product.propTypes = {};

function Product({ product }) {
  // Learn more
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(product.price);

  const dispatch = useDispatch();
  const dataCart = useSelector(state => state.shop.cart)

  // 100.000.000

  // useDispatch, useSelector
  // connect(mapStateToProps, mapDispatchToProps)

  // Call to reducer
  const handleAddCart = (product) => {
    let indexProduct = dataCart.findIndex(item => { return item.id === product.id })

    if (indexProduct !== -1) {
      dispatch(fetchCartPut(product.id, indexProduct, dataCart))
    } else {
      dispatch(fetchCartPost(product))

    }
    // dispatch(addToCart(productId));
  };
  // const handleSaveCart = (item) => {
  // }

  return (
    <Card classes={{ root: 'card-product' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="men fashion"
        />
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          classes={{ body1: 'card-product__name' }}
        >
          {product.name}
        </Typography>
        <Typography variant="body1" classes={{ body1: 'card-product__price' }}>
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(product.price)}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          Quantity: {product.quantity}
        </Typography>
      </CardContent>
      <CardActions classes={{ root: 'card-product__action' }}>
        {/* <ButtonText
          onClick={() => handleAddCart(product.id)}
          size="small"
          text="Add to cart"
        /> */}
        <button onClick={() => handleAddCart(product)}>Add to cart</button>
      </CardActions>
    </Card>
  );
}

export default Product;
