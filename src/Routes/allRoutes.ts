import SignIn from '../pages/Authentication/SignIn';
import { HubsView, OverView, UsersPage } from '../pages/Dashboard/Dashboard';

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

export const authProtectedRoutes: Array<RouteObject> = [
  { path: '/overview', component: OverView },
  { path: '/users', component: UsersPage },
  { path: '/hubs', component: HubsView },
];

export const publicRoutes = [
  // authentication
  { path: '/login', component: SignIn },
];
