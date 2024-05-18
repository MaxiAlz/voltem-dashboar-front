import { ReactNode } from 'react';
import { Navigate, To } from 'react-router-dom';

interface ProtectecRouterProps {
  children: ReactNode;
  redirectTo?: To;
}

const user = {
  id: 1,
  name: 'Juancarlo',
};

const ProtectedRoutes = ({
  children,
  redirectTo = '/',
}: ProtectecRouterProps) => {
  if (!user) {
    <Navigate to={redirectTo} />;
  }
  return children;
};

export default ProtectedRoutes;
