import { ReactNode } from 'react';
import { Navigate, To } from 'react-router-dom';
import { TOKEN_KEY } from '../services/auth/authService';

interface ProtectecRouterProps {
  children: ReactNode;
  redirectTo?: To;
}

const ProtectedRoutes = ({
  children,
  redirectTo = '/',
}: ProtectecRouterProps) => {
  if (!localStorage.getItem(TOKEN_KEY)) {
    <Navigate to={redirectTo} />;
  }
  return children;
};

export default ProtectedRoutes;
