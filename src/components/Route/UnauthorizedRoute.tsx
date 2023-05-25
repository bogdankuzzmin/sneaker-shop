import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { IPrivateRouteProps } from '@components/Route/types';
import { useAppSelector } from '@hooks/useRedux';
import { Paths } from '@utils/constants/routes';

const UnauthorizedRoute: FC<IPrivateRouteProps> = ({ component: Component, redirect }) => {
  const { userId } = useAppSelector((state) => state.auth);
  console.log('NOT PRIVAE')

  return !userId ? <Component /> : <Navigate to={redirect ?? Paths.esplora} />
};

export default UnauthorizedRoute;

