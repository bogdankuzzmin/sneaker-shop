import React, { FC } from 'react';
import Login from '@pages/Login';
import Products from '@pages/Products';

import classes from './Main.modules.scss';

const Main: FC = () => {
  return (
      <>
        <Products />
      </>
  );
};

export default Main;