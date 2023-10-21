import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useUserStore from './stores/userStore';

const PrivateRoute = () => {
  const user = useUserStore((state) => state.user);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
