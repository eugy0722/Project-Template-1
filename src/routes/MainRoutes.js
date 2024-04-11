import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import PrivateRoutes from './PrivateRoutes';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/utitities/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/utitities/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/utitities/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/utitities/AntIcons')));

// render - managenment
const User = Loadable(lazy(() => import('pages/components-overview/managenment/Users')));
const Market = Loadable(lazy(() => import('pages/components-overview/managenment/Markets')));
const Sector = Loadable(lazy(() => import('pages/components-overview/managenment/Sectors')));
const ProductService = Loadable(lazy(() => import('pages/components-overview/managenment/ProductsServices')));

// render - manager update
const UserForm = Loadable(lazy(() => import('components/update-forms/UserForm')));
const MarketForm = Loadable(lazy(() => import('components/update-forms/MarketForm')));
const SectorForm = Loadable(lazy(() => import('components/update-forms/SectorForm')));
const BusinessForm = Loadable(lazy(() => import('components/update-forms/BusinessForm')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: '/',
          element: <DashboardDefault />
        },
        {
          path: 'color',
          element: <Color />
        },
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DashboardDefault />
            }
          ]
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'shadow',
          element: <Shadow />
        },
        {
          path: 'typography',
          element: <Typography />
        },
        {
          path: 'icons/ant',
          element: <AntIcons />
        },
        {
          path: 'users',
          element: <User />
        },
        {
          path: 'users/update',
          element: <UserForm />
        },
        {
          path: '/markets',
          element: <Market />
        },
        {
          path: '/market/update',
          element: <MarketForm />
        },
        {
          path: '/sectors',
          element: <Sector />
        },
        {
          path: 'sectors/update',
          element: <SectorForm />
        },
        {
          path: '/business',
          element: <ProductService />
        },
        {
          path: 'business/update',
          element: <BusinessForm />
        }
      ]
    }
  ]
};

export default MainRoutes;
