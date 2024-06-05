import SignIn from '../pages/Authentication/SignIn';
import Chart from '../pages/Chart';
import { HubsPage, OverView, UsersPage } from '../pages/Dashboard/Dashboard';
import HubDataPage from '../pages/Dashboard/Hubs/HubDataPage';
import { UserDataPage } from '../pages/Dashboard/users/UserDataPage';
import Profile from '../pages/Profile';

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

export const authProtectedRoutes: Array<RouteObject> = [
  { path: '/overview', component: OverView },
  { path: '/users', component: UsersPage },
  { path: '/users/:id', component: UserDataPage },
  { path: '/hubs', component: HubsPage },
  { path: '/hubs/:id', component: HubDataPage },
  { path: '/profile', component: Profile },
  { path: '/chart', component: Chart },
];

export const publicRoutes = [
  // authentication
  { path: '/login', component: SignIn },
];
