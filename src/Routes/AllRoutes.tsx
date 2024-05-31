import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ECommerce from '../pages/Dashboard/ECommerce';
import PageTitle from '../components/PageTitle';
import { HubsView, OverView, UsersPage } from '../pages/Dashboard/Dashboard';
import Calendar from '../pages/Calendar';
import Profile from '../pages/Profile';
import FormElements from '../pages/Form/FormElements';
import FormLayout from '../pages/Form/FormLayout';
import Tables from '../pages/Tables';
import Settings from '../pages/Settings';
import Chart from '../pages/Chart';
import Alerts from '../pages/UiElements/Alerts';
import Buttons from '../pages/UiElements/Buttons';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
// import ProtectedRoutes from './ProtectedRoutes';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const AllRoutes = () => {
  const authStatus = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();
  return (
    <Routes>
      {authStatus.user == null && <Route element={<Navigate to="/" />} />}
      {/* Rutas para admin */}
      {authStatus.user && authStatus.user?.role === 'ADMIN'
        ? adminRoutes
        : null}

      {publicRoutes}

      <Route
        path="*"
        element={
          <div className="m-auto ">
            {authStatus.user == null ? (
              <>
                <h1 className="m-20 text-5xl">
                  No tienes permisos para acceder a esta pagina
                </h1>
                <button onClick={() => navigate('/login')}>
                  <h1 className="ml-20 m-5 text-xl font-bold text-primary">
                    ir a login
                  </h1>
                </button>
              </>
            ) : (
              <h1 className="m-20 text-5xl">Ah ocurrido un error :(</h1>
            )}
          </div>
        }
      />
    </Routes>
  );
};

const publicRoutes = [
  <Route
    path="/login"
    key="/login"
    element={
      <>
        <PageTitle title="Login | VOLTEM" />
        <SignIn />
      </>
    }
  />,
];

const adminRoutes = [
  <Route
    index
    key="index"
    element={
      <>
        <PageTitle title="Overview | VOLTEM " />
        <OverView />
      </>
    }
  />,
  <Route
    path="/overview"
    key="/overview"
    element={
      <>
        <PageTitle title="Overview | VOLTEM" />
        <OverView />
      </>
    }
  />,
  <Route
    path="/users"
    key="/users"
    element={
      <>
        <PageTitle title="Usuarios | VOLTEM" />
        <UsersPage />
      </>
    }
  />,
  <Route
    path="/hubs"
    key="/hubs"
    element={
      <>
        <PageTitle title="Hubs | VOLTEM" />
        <HubsView />
      </>
    }
  />,
  <Route
    path="/ecomerce"
    key="/ecomerce"
    element={
      <>
        <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <ECommerce />
      </>
    }
  />,
  <Route
    path="/calendar"
    key="/calendar"
    element={
      <>
        <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Calendar />
      </>
    }
  />,

  <Route
    path="/profile"
    key="/profile"
    element={
      <>
        <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Profile />
      </>
    }
  />,
  <Route
    path="/forms/form-elements"
    key="/forms/form-elements"
    element={
      <>
        <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <FormElements />
      </>
    }
  />,
  <Route
    path="/forms/form-layout"
    key="/forms/form-layout"
    element={
      <>
        <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <FormLayout />
      </>
    }
  />,
  <Route
    path="/tables"
    key="/tables"
    element={
      <>
        <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Tables />
      </>
    }
  />,
  <Route
    path="/settings"
    key="/settings"
    element={
      <>
        <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Settings />
      </>
    }
  />,
  <Route
    path="/chart"
    key="/chart"
    element={
      <>
        <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Chart />
      </>
    }
  />,
  <Route
    path="/ui/alerts"
    key="/ui/alerts"
    element={
      <>
        <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Alerts />
      </>
    }
  />,
  <Route
    path="/ui/buttons"
    key="/ui/buttons"
    element={
      <>
        <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Buttons />
      </>
    }
  />,
  <Route
    path="/auth/signin"
    key="/auth/signin"
    element={
      <>
        <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <SignIn />
      </>
    }
  />,
  <Route
    path="/auth/signup"
    key="/auth/signup"
    element={
      <>
        <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <SignUp />
      </>
    }
  />,
];

export { AllRoutes };
