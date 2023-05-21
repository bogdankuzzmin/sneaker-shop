import React from 'react';

import ProductItem from '@components/ProductList/partials/ProductItem';

import classes from './ProductList.module.scss';
import { SNEAKERS } from '@/mocs/sneakers';

const ProductList = () => (
  <ul className={classes.List}>
    {SNEAKERS.map(({ title, image, price }) =>
      <ProductItem key={title} image={image} title={title} price={price} />
    )}
  </ul>
);

export default ProductList;