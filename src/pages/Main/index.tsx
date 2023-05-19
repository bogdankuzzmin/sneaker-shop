import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '@pages/Login';
import Products from '@pages/Products';
import ProductDescription from '@components/ProductList/partials/ProductDescription';
import NotFound from '@pages/NotFound';

import { Paths } from '@utils/constants/routes';

import classes from './Main.modules.scss';

const Main: FC = () => {
  return (
    <Routes>
      <Route path={Paths.root} element={<Login />} />
      <Route path={Paths.products} element={<Products />} />
      <Route path={`${Paths.products}/:id`} element={<ProductDescription />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;