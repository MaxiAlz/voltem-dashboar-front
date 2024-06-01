import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RouteIndex from './Routes/RouteIndex';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <RouteIndex />;
}

export default App;
