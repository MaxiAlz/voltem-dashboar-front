import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="m-20 text-5xl">404 - Pagina no encotrada</h1>
      <button onClick={() => navigate('/')}>
        <h1 className="ml-20 m-5 text-xl font-bold text-primary">ir a home</h1>
      </button>
    </>
  );
};
