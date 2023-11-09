import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/Auth/authStore';

const PrivateRoute = () => {
  const user = useAuthStore((state) => state.user);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
