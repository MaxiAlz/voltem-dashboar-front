import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="dark:bg-black flex  flex-col items-center  w-full h-screen">
      <h1 className="text-5xl m-50">404 - Pagina no encotrada</h1>
      <button onClick={() => navigate('/')}>
        <h1 className=" text-xl font-bold text-primary">ir a home</h1>
      </button>
    </main>
  );
};
