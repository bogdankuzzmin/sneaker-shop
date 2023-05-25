import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppDispatch } from '@hooks/useRedux';
import { logout, logoutSuccess, logoutError } from '@store/auth/authSlice';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';

const Logout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logout());

    signOut(auth)
      .then(() => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutError(error)))
  }, [])

  return <Navigate to="/" />;
};

export default Logout;