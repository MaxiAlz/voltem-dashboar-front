import { Route, Routes } from 'react-router-dom';
import ECommerce from '../pages/Dashboard/ECommerce';
import PageTitle from '../components/PageTitle';
import { HubsView, UsersView } from '../pages/Dashboard/Dashboard';
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
import ProtectedRoutes from './ProtectedRoutes';
import OverView from '../pages/Dashboard/overview/OverView';

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/protected"
        element={
          <ProtectedRoutes>
            <div>Pagina protegina wey</div>
          </ProtectedRoutes>
        }
      />

      <Route
        index
        element={
          <>
            <PageTitle title="Overview|VOLTEM " />
            <OverView />
          </>
        }
      />
      <Route
        path="/ecomerce"
        element={
          <>
            <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <ECommerce />
          </>
        }
      />
      <Route
        path="/users"
        element={
          <>
            <PageTitle title="Usuarios | Voltem Dashboard" />
            <UsersView />
          </>
        }
      />
      <Route
        path="/hubs"
        element={
          <>
            <PageTitle title="Tabla de usuarios - Voltem Dashboard" />
            <HubsView />
          </>
        }
      />
      <Route
        path="/calendar"
        element={
          <>
            <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Calendar />
          </>
        }
      />

      <Route
        path="/profile"
        element={
          <>
            <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Profile />
          </>
        }
      />
      <Route
        path="/forms/form-elements"
        element={
          <>
            <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <FormElements />
          </>
        }
      />
      <Route
        path="/forms/form-layout"
        element={
          <>
            <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <FormLayout />
          </>
        }
      />
      <Route
        path="/tables"
        element={
          <>
            <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Tables />
          </>
        }
      />
      <Route
        path="/settings"
        element={
          <>
            <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Settings />
          </>
        }
      />
      <Route
        path="/chart"
        element={
          <>
            <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Chart />
          </>
        }
      />
      <Route
        path="/ui/alerts"
        element={
          <>
            <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Alerts />
          </>
        }
      />
      <Route
        path="/ui/buttons"
        element={
          <>
            <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Buttons />
          </>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <>
            <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignIn />
          </>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <>
            <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignUp />
          </>
        }
      />
    </Routes>
  );
};

export { AllRoutes };
