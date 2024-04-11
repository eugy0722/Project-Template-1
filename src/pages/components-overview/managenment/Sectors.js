// import @mui/material
import { Grid } from '../../../../node_modules/@mui/material/index';

// import ComponentSkeleton
import ComponentSkeleton from '../ComponentSkeleton';
import Formulary from 'components/formularies/SectorForm';
import DataTable from 'components/Tables/SectorDataTable';

const Sector = () => (
  <ComponentSkeleton>
    <Grid>
      <Grid>
        <h2>Registar Sector</h2>
        <Formulary />
      </Grid>
      <Grid>
        <h2>Lista de Sectores</h2>
        <DataTable />
      </Grid>
    </Grid>
  </ComponentSkeleton>
);

export default Sector;
