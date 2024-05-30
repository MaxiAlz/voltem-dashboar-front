import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import { AllRoutes } from './Routes/AllRoutes';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const { pathname } = useLocation();

  const authState = useSelector((state: RootState) => state.auth);

  console.log('authState :>> ', authState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? <Loader /> : <AllRoutes />;
}

export default App;
