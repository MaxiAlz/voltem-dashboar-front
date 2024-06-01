import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthToken } from '../services/auth/authService';
import { RootState } from '../redux/store';
import Loader from '../common/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authProtectedRoutes, publicRoutes } from './allRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import { NotFound } from '../pages/NotFound/NotFound';

const RouteIndex = () => {
  const { authStatus } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(checkAuthToken());
  }, []);

  if (authStatus === 'checking') {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <Routes>
        {authStatus === 'authenticated' ? (
          <>
            <Route path="/" element={<Navigate to="/overview" />} />
            <Route path="/login" element={<Navigate to="/overview" />} />
            {authProtectedRoutes.map((route: any, idx: number) => (
              <Route
                key={idx}
                path={route.path}
                element={
                  <ProtectedRoutes>
                    <route.component />
                  </ProtectedRoutes>
                }
              />
            ))}
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/" element={<Navigate to="/login" />} />
            {publicRoutes.map((route: any, idx: number) => (
              <Route
                path={route.path}
                key={idx}
                element={<route.component />}
              />
            ))}
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default RouteIndex;
