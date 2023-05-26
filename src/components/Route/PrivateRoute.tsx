import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@hooks/useRedux';

import { IPrivateRouteProps } from '@components/Route/types';

import { Paths } from '@utils/constants/routes';

const PrivateRoute: FC<IPrivateRouteProps> = ({ component: Component, redirect }) => {
  const { userId } = useAppSelector((state) => state.auth);

  return userId ? <Component /> : <Navigate to={redirect ?? Paths.root} />
};

export default PrivateRoute;

