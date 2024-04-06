// material-ui
// import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { Grid } from '@mui/material/index';

// project import
import ComponentSkeleton from '../ComponentSkeleton';
// import MainCard from 'components/MainCard';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const ComponentUser = () => (
  <ComponentSkeleton>
    <Grid>
      <h1>User Manager</h1>
      <Grid>Create User</Grid>
      <Grid>Users List</Grid>
    </Grid>
  </ComponentSkeleton>
);

export default ComponentUser;
