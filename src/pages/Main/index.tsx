import React, { FC, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';

import { useAppDispatch } from '@hooks/useRedux';

import Login from '@pages/Login';
import Products from '@pages/Products';
import NotFound from '@pages/NotFound';
import Logout from '@pages/Logout';

import Layout from '@components/Layout';
import ProductDescription from '@components/ProductList/partials/ProductDescription';
import PrivateRoute from '@components/Route/PrivateRoute';
import UnauthorizedRoute from '@components/Route/UnauthorizedRoute';
import Spinner from '@components/UI/Spinner';

import { login, loginSuccess, loginError, setLoading } from '@store/auth/authSlice';

import { Paths } from '@utils/constants/routes';

const Main: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(login())

    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(loginSuccess({
            userId: user.uid,
            email: user.email,
          }))
        }

        setIsLoading(false);
      })
    } catch (error) {
      dispatch(loginError(error));
    } finally {
      dispatch(setLoading(false));
    }
  }, [])

  if (isLoading) return (
    <Layout disableBreadcrumbs disableFooter variant="Center">
      <Spinner />
    </Layout>
  )

  return (
    <Routes>
      <Route index path={Paths.root} element={<UnauthorizedRoute component={Login} />} />
      <Route path={Paths.esplora} element={<PrivateRoute component={Products} /> } />
      <Route path={`${Paths.esplora}/:title`} element={<PrivateRoute component={ProductDescription} />} />
      <Route path={Paths.logout} element={<PrivateRoute component={Logout} />} />
      <Route path="*" element={<PrivateRoute component={NotFound} />} />
    </Routes>
  );
};

export default Main;