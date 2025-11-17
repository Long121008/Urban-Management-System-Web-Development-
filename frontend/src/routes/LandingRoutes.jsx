import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';
import ProtectedRoute from './ProtectedRoutes';
// lazy load the landing view (located at src/views/user/landing/index.jsx)
const LandingPage = Loadable(lazy(() => import('views/landing/LandingPage')));


const LandingRoutes = {
  path: '/landing_page/',
  element: (
        <LandingPage />
    )
};

export default LandingRoutes;