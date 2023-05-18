import React from 'react';

import ProductItem from '@components/ProductList/partials/ProductItem';

import classes from './ProductList.module.scss';
import { SNEAKERS } from '@/mocs/sneakers';

const ProductList = () => {
  return (
    <div className={classes.List}>
      {SNEAKERS.map((sneaker) => <ProductItem key={sneaker.title} image={sneaker.image} title={sneaker.title} price={sneaker.price} />)}
    </div>
);
};

export default ProductList;