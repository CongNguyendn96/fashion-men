import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import CartModal from '../CartModal';
import Product from '../Product';
import SkeletonProduct from '../Skeleton';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../../redux/Shopping/shopping-actions';

function ProductList({ products, fetchProductList }) {
  const [loading, setLoading] = useState(false);
  // const products = useSelector((state) => state.shop.products);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProductsRequest());
  // }, [dispatch]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {loading ? (
          <SkeletonProduct />
        ) : (
          <>
            <CartModal />
            <Typography variant="h5" classes={{ h5: 'text-left' }}>
              Total: {products.length}
            </Typography>
            <Grid container spacing={3}>
              {products.map((product, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
            <button onClick={() => fetchProductList()}>Fetch Products</button>
          </>
        )}
      </Box>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductList: () => dispatch(fetchProductsRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
