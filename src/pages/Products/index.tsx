import React from 'react';
import cn from 'classnames';

import Layout from '@components/Layout';
import ProductList from '@components/ProductList';

import classes from './Products.module.scss';

const Products = () => {
  return (
    <Layout>
      <h2 className={cn('title', classes.Title)}>Esplora</h2>

      <ProductList />
    </Layout>
  );
};

export default Products;