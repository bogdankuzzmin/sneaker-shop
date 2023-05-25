import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { IPrivateRouteProps } from '@components/Route/types';
import { useAppSelector } from '@hooks/useRedux';
import { Paths } from '@utils/constants/routes';

const UnauthorizedRoute: FC<IPrivateRouteProps> = ({ component: Component, redirect }) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  return !accessToken ? <Component /> : <Navigate to={redirect || Paths.esplora} />
};

export default UnauthorizedRoute;

