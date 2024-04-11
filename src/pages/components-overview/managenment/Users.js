// import @mui/material
import { Grid } from '../../../../node_modules/@mui/material/index';

// import componentSkeleton
import ComponentSkeleton from '../ComponentSkeleton';
import DataTable from 'components/Tables/UserDataTable';

const ComponentUser = () => (
  <ComponentSkeleton>
    <Grid>
      <Grid>
        <h2>Lista de Utilizadores</h2>
        <DataTable />
      </Grid>
    </Grid>
  </ComponentSkeleton>
);

export default ComponentUser;
