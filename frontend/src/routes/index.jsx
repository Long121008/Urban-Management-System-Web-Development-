import { createBrowserRouter } from 'react-router-dom';
import AuthenticationRoutes from './AuthenticationRoutes';
import AdminRoutes from './AdminRoutes';
import EngineerRoutes from './EngineerRoutes';
import UserRoutes from './UserRoutes';
import LandingRoutes from './LandingRoutes';

const router = createBrowserRouter(
  [
    AuthenticationRoutes,
    AdminRoutes,
    EngineerRoutes,
    UserRoutes,
    LandingRoutes
  ],
  {
    basename: import.meta.env.VITE_APP_BASE_NAME
  }
);

export default router;